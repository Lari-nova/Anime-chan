import React, { useEffect, useState } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import KindView from "./KindView";
import { useLocation, useHistory } from "react-router-dom";
import useKindImages, { KindResponse } from "../../hooks/useKindImages";

const BATCH_SIZE = 10;

const PairingsController = () => {
	const [visibleList, setVisibleList] = useState<Array<QueryDocumentSnapshot>>();
	const [currentIndex, setCurrentIndex] = useState<number>(BATCH_SIZE);
	const imageKind: KindResponse = useKindImages("otp");
	const location = useLocation();
	const history = useHistory();

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

	const openModal = (url: string) => {
		let buff = new Buffer(url);
		history.push({
			pathname: `/img/${buff.toString('base64')}`,
			state: { background: location }
		})
	};

	return(
		<KindView urlList={visibleList} onEndPage={nextPage} onCardClick={openModal} />
	)
};

export default PairingsController;
