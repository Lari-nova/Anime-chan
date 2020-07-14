import React, { useEffect, useState } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { firestore } from "../../components/App";
import GenderView from "./GenderView";

const FemaleController = () => {
	const [urlsList, setUrlsList] = useState<Array<QueryDocumentSnapshot>>();

	useEffect(() => {
		firestore.collection("images").where("kind", "==", "female")
			.get().then((response) => {
			setUrlsList(response.docs)
		})
	}, []);

	return(
		<GenderView urlList={urlsList}/>
	)
};

export default FemaleController;
