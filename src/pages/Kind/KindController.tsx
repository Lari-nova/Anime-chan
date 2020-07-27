import React, { useEffect, useState } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { firestore } from "../../components/App";
import KindView from "./KindView";

const BATCH_SIZE = 10;

interface Props {
	kind: string
}

const KindController = ({ kind }: Props) => {
	const [urlsList, setUrlsList] = useState<Array<QueryDocumentSnapshot>>();
	const [visibleList, setVisibleList] = useState<Array<QueryDocumentSnapshot>>();
	const [currentIndex, setCurrentIndex] = useState<number>(BATCH_SIZE);

	useEffect(() => {
		firestore.collection("images").where("kind", "==", kind)
			.get().then((response) => {
				setVisibleList(response.docs.slice(0, BATCH_SIZE));
				setUrlsList(response.docs)
			});
	}, []);

	const nextPage = () => {
		setVisibleList((oldList) => {
			const resultSlice = urlsList?.slice(currentIndex, currentIndex + BATCH_SIZE);
			setCurrentIndex((oldIndex) => (oldIndex + BATCH_SIZE));
			if (resultSlice) {
				return oldList?.concat(resultSlice);
			}
		})
	};

	return(
		<KindView urlList={visibleList} onEndPage={nextPage} />
	)
};

export default KindController;
