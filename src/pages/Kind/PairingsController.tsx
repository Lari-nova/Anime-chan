import React, { useEffect, useState } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import KindView from "./KindView";
import useKindImages, { KindResponse } from "../../hooks/useKindImages";

const BATCH_SIZE = 10;

const PairingsController = () => {
	const [visibleList, setVisibleList] = useState<Array<QueryDocumentSnapshot>>();
	const [currentIndex, setCurrentIndex] = useState<number>(BATCH_SIZE);
	const imageKind: KindResponse = useKindImages("otp");

	useEffect(() => {
		if (imageKind) {
			setVisibleList(imageKind.slice(0, BATCH_SIZE));
		}
	},[imageKind]);

	const nextPage = () => {
		if (imageKind) {
			setVisibleList((oldList) => {
				const resultSlice = imageKind.slice(currentIndex, currentIndex + BATCH_SIZE);
				setCurrentIndex((oldIndex) => (oldIndex + BATCH_SIZE));
				if (resultSlice) {
					return oldList?.concat(resultSlice);
				}
			})
		}
	};

	return(
		<KindView urlList={visibleList} onEndPage={nextPage} onCardClick={alert}/>
	)
};

export default PairingsController;
