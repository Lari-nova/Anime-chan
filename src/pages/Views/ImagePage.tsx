import React from "react";
import { useParams } from "react-router-dom";

const ImagePage = () => {
	let { url } = useParams();
	let buff = new Buffer(url, "base64");

	return(
		<div>
			<img src={buff.toString('ascii')} style={{
				width: 500,
				height: "auto"
			}}/>
		</div>
	);
};

export default ImagePage;
