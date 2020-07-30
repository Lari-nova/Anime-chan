import React, { useEffect, useContext } from "react";
import { AppContext, firestore } from "../components/App";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";

export type KindResponse = Array<QueryDocumentSnapshot> | undefined;

const useKindImages = (kind): KindResponse => {

	const [globalState, setGlobalState] = useContext(AppContext);

	useEffect(() => {
		if (!globalState || !globalState[kind]) {
			firestore.collection("images").where("kind", "==", kind)
				.get().then((response) => {
				setGlobalState((prev) => ({...prev, [kind]: response.docs}));
			});
		}
	}, []);

	if (globalState && globalState[kind]) {
		return globalState[kind];
	}

	return undefined;
};
export default useKindImages;
