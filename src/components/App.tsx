import React, { Dispatch, SetStateAction, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase";
import MenuNavigation from "./MenuNavigation";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { MainComponent } from "../styles/StyleComponents";

const firebaseConfig = {
	apiKey: "AIzaSyAEybk5IYJbjkh0m_1dMEKZ2cfQsumpdh0",
	authDomain: "anime-76000.firebaseapp.com",
	databaseURL: "https://anime-76000.firebaseio.com",
	projectId: "anime-76000",
	storageBucket: "anime-76000.appspot.com",
	messagingSenderId: "963151809403",
	appId: "1:963151809403:web:1b7152c3fac5e40ac28bde",
	measurementId: "G-1EEF72505C"
};

const firebaseInstance = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseInstance.firestore();

export type GlobalState = {
	female?: Array<QueryDocumentSnapshot>,
	male?: Array<QueryDocumentSnapshot>,
	pairings?: Array<QueryDocumentSnapshot>
}

type AppContextType = [GlobalState | undefined, Dispatch<SetStateAction<GlobalState | undefined>>]

export const AppContext = React.createContext<AppContextType>([undefined, () => {}]);

const App = () => {
	const [globalState, setGlobalState] = useState<GlobalState>();

	return(
		<Router>
			<MainComponent>
				<AppContext.Provider value={[globalState, setGlobalState]}>
					<MenuNavigation />
				</AppContext.Provider>
			</MainComponent>
		</Router>
	);
};

export default App;
