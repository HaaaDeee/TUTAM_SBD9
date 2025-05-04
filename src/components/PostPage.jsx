import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/NavBar";

export default function PostPage() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = { name, title, content };

        try {
            const response = await fetch("https://tutam-naufalhadirasikhin-sbd9be.vercel.app/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                setMessage("Post created successfully!");
                setName("");
                setTitle("");
                setContent("");
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            setMessage("Error: Unable to create post.");
        }
    };

    return (
        <div style={{ maxWidth: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div
                    className="bg-[#AAB396] w-[600px] h-[600px] m-auto rounded-2xl flex flex-col text-white"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                    }}
                >
                    <h1 className="text-[#674636] text-3xl font-bold mb-4">Create a Post</h1>
                    <div className="text-[#674636]" style={{ marginBottom: "10px", width: "90%" }}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                backgroundColor: "#674636",
                                color: "#FFF8E8",
                            }}
                        />
                    </div>
                    <div className="text-[#674636]" style={{ marginBottom: "10px", width: "90%" }}>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                backgroundColor: "#674636",
                                color: "#FFF8E8",
                            }}
                        />
                    </div>
                    <div className="text-[#674636]" style={{ marginBottom: "10px", width: "90%" }}>
                        <label htmlFor="content">Content:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                height: "100px",
                                backgroundColor: "#674636",
                                color: "#FFF8E8",
                            }}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            cursor: "pointer",
                            backgroundColor: "#674636",
                            color: "#FFF8E8",
                        }}
                    >
                        Post
                    </button>
                    {message && <p style={{ marginTop: "20px", color: "red" }}>{message}</p>}
                </div>
            </form>
            
        </div>
    );
}