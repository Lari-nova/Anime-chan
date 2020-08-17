import React, {useEffect, useState} from "react";
import { firestore } from "../../components/App";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { useParams, useHistory, useLocation } from "react-router-dom";
import KindView from "../Kind/KindView";

const BATCH_SIZE = 10;

const AnimeController = () => {
	let { type } = useParams();
	let newType = type.replace("-", " ");

	const [urlsList, setUrlsList] = useState<Array<QueryDocumentSnapshot>>();
	const [visibleList, setVisibleList] = useState<Array<QueryDocumentSnapshot>>();
	const [currentIndex, setCurrentIndex] = useState<number>(BATCH_SIZE);
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		firestore.collection("images").where("img_type", "==", newType)
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

	const openModal = (url: string) => {
		let buff = new Buffer(url);
		history.push({
			pathname: `/img/${buff.toString('base64')}`,
			state: { background: location }
		})
	};

	return (
		<KindView urlList={visibleList} onEndPage={nextPage} onCardClick={openModal}/>
	);
};

export default AnimeController;
