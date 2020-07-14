import React, { useEffect, useState } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { firestore } from "../../components/App";
import KindView from "./KindView";

const FemaleController = () => {
	const [urlsList, setUrlsList] = useState<Array<QueryDocumentSnapshot>>();

	useEffect(() => {
		firestore.collection("images").where("kind", "==", "female")
			.get().then((response) => {
			setUrlsList(response.docs)
		})
	}, []);

	return(
		<KindView urlList={urlsList} />
	)
};

export default FemaleController;
