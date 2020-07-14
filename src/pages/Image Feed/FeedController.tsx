import React, { useEffect, useState } from "react";
import { firestore } from "../../components/App";
import FeedView from "./FeedView";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";

const FeedController = () => {
	const [currentId, setCurrentId] = useState(0);
	const [documentsList, setDocumentsList] = useState<Array<QueryDocumentSnapshot>>();
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const first = firestore.collection("images")
			.orderBy("id")
			.limit(10);
		first.get().then((documentSnapshots) => {
			setCurrentId(documentSnapshots.docs.length);
			setDocumentsList(documentSnapshots.docs);
		});
	}, []);

	const nextPage = () => {
		if (!isLoading) {
			setLoading(true);
			const first = firestore.collection("images")
				.orderBy("id")
				.startAt(currentId)
				.limit(10);
			first.get().then((documentSnapshots) => {
				setCurrentId((oldId) => (oldId + documentSnapshots.docs.length));
				setDocumentsList((oldList) => (oldList?.concat(documentSnapshots.docs)));
				setLoading(false);
			});
		}
	};

	return(
		<FeedView documentList={documentsList} onEndPage={nextPage}/>
	);
};

export default FeedController;
