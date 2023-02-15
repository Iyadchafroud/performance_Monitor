import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";

function App() {
	const [count, setCount] = useState(0);
	const [reponse, setResponse] = useState("vv");
	//openai.apiKey = ;
	const configuration = new Configuration({
		// apiKey: process.env.OPENAI_API_KEY,
		apiKey: "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",
	});
	const openai = new OpenAIApi(configuration);
	const prompt = "translate gateau to english and spanish and arabic in array ";
	useEffect(() => {
		openai
			.createCompletion({
				model: "text-davinci-003",
				prompt: prompt,
				temperature: 0.6,
				max_tokens: 100,
			})
			.then((response) => {
				console.log(response.data.choices[0].text);
				setResponse(response.data.choices[0].text);
			});
	}, []);
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>
				{
					/* {reponse.split(",").map((el) => (
					<div>{el}</div>
				))} */
					<>
						<p> {prompt} </p>
						<div className="">{reponse}</div>
					</>
				}
			</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
