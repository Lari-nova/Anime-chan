import React, { useEffect, useState } from "react";
import { firestore } from "../../components/App";
import FeedView from "./FeedView";
import {QueryDocumentSnapshot, QuerySnapshot} from "@firebase/firestore-types";

const FeedController = () => {
	const [currentId, setCurrentId] = useState(0);
	const [documentsList, setDocumentsList] = useState<Array<QueryDocumentSnapshot>>();
	const [isLoading, setLoading] = useState(false);
	const [isNextPage, setNextPage] = useState(true);

	useEffect(() => {
		firestore.collection("images")
			.orderBy("id")
			.limit(10)
			.get()
			.then((documentSnapshots) => {
				setCurrentId(documentSnapshots.docs.length);
				setDocumentsList(documentSnapshots.docs);
			});
	}, []);

	const prepareData = (documentSnapshots: QuerySnapshot) => {
		setCurrentId((oldId) => (oldId + documentSnapshots.docs.length));
		setDocumentsList((oldList) => (
			oldList?.concat(documentSnapshots.docs))
		);
		setLoading(false);
		if (documentSnapshots.size === 0) setNextPage(false)
	};

	const loadPage = () => {
		firestore.collection("images")
			.orderBy("id")
			.startAt(currentId)
			.limit(10)
			.get()
			.then(prepareData);
	};

	const nextPage = () => {
		if (!isLoading && isNextPage) {
			setLoading(true);
			loadPage();
		}
	};

	return(
		<FeedView documentList={documentsList} onEndPage={nextPage}/>
	);
};

export default FeedController;
