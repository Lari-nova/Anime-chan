import React, { useEffect, useState } from "react";
import { FAVORITE_KEY } from "../../constants/const";
import FavoritesView from "./FavoritesView";

const FavoritesController = () => {
	const [imagesArray, setImagesArray] = useState<Array<string> | null>(null);

	useEffect(() => {
		let storage = localStorage.getItem(FAVORITE_KEY);
		if (storage != null) {
			setImagesArray(JSON.parse(storage));
		}
	}, []);

	return(
		<FavoritesView imagesList={imagesArray} />
	)
};

export default FavoritesController;
