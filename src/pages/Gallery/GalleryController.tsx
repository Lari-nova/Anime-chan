import React, { useState, useEffect } from 'react';
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { firestore } from '../../components/App';
import GalleryViewMemo from "./GalleryView";
import AnimeController from "../AnimePage/AnimeController";

const GalleryController = () => {
	let { path, url } = useRouteMatch();
	const history = useHistory();
	const [imagesList, setImages] = useState<Array<QueryDocumentSnapshot>>();

	useEffect(() => {
		firestore.collection("types").get().then((response) => {
			setImages(response.docs);
		})
	}, []);

	const onPageOpen = (type: string) => {
		const newType = type.replace(' ', "-");
		history.push({
			pathname: `${url}/${newType}`
		})
	};

	return (
    <Switch>
	    <Route exact path={path}>
      <GalleryViewMemo imagesList={imagesList} onTypeClick={onPageOpen} />
      </Route>
      <Route path={`${path}/:type`}>
        <AnimeController />
      </Route>
    </Switch>
	);
};

export default GalleryController;
