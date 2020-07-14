import React, { useEffect, useState } from "react";
import { firestore } from "../../components/App";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import KindView from "./KindView";

const MaleController = () => {

	const [urlsList, setUrlsList] = useState<Array<QueryDocumentSnapshot>>();

	useEffect(() => {
		firestore.collection("images").where("kind", "==", "male")
			.get().then((response) => {
				setUrlsList(response.docs)
			})
	}, []);

	return(
		<KindView urlList={urlsList}/>
	)
};

export default MaleController;
