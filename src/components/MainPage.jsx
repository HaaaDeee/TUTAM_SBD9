import { useState, useEffect } from "react";
import NavBar from "../elements/NavBar";

export default function MainPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fungsi untuk mengambil data post dari backend
    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/posts");
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            } else {
                setError("Failed to fetch posts.");
            }
        } catch (err) {
            setError("Error fetching posts.");
        } finally {
            setLoading(false);
        }
    };

    // Ambil data post saat komponen pertama kali dirender
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div style={{ padding: "0" }}> {/* Hapus padding */}
            <NavBar />
            <h1 className="text-[#674636] text-5xl align-left font-bold p-20">All Posts</h1>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                {posts.map((post) => (
                    <li
                        key={post._id}
                        style={{
                            display: "flex", // Gunakan flexbox
                            justifyContent: "space-between", // Pisahkan konten dan tombol delete
                            alignItems: "center", // Rata vertikal
                            color: "#674636",
                            width: "100%", // Lebar penuh
                            backgroundColor: "#AAB396",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            padding: "10px",
                            marginBottom: "30px",
                            boxSizing: "border-box",
                        }}
                    >
                        <div style={{textAlign: "left", flex: 1, padding: "10px"}}>
                            <h3 className="font-bold text-2xl">{post.title}</h3>
                            <p className="text-xl">{post.content}</p>
                            <small>Posted by: {post.name}</small>
                        </div>
                        <button
                            onClick={() => handleDelete(post._id)} // Tambahkan fungsi untuk menghapus post
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "red",
                                cursor: "pointer",
                                fontSize: "14px",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// export default function MainPage() {
//     // Data hardcoded untuk testing
//     const posts = [
//         {
//             _id: "1",
//             name: "John Doe",
//             title: "My First Post",
//             content: "This is the content of my first post.",
//         },
//         {
//             _id: "2",
//             name: "Jane Smith",
//             title: "Another Post",
//             content: "This is another example of a post.",
//         },
//         {
//             _id: "3",
//             name: "Alice Johnson",
//             title: "Hello World",
//             content: "This is a simple post to say hello!",
//         },
//     ];
// }

// hard coded testing
//     return (
//         <div style={{ padding: "0" }}> {/* Hapus padding */}
//             <NavBar />
//             <h1 className="text-[#674636] text-5xl align-left font-bold p-20">All Posts</h1>
//             <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
//                 {posts.map((post) => (
//                     <li
//                         key={post._id}
//                         style={{
//                             display: "flex", // Gunakan flexbox
//                             justifyContent: "space-between", // Pisahkan konten dan tombol delete
//                             alignItems: "center", // Rata vertikal
//                             color: "#674636",
//                             width: "100%", // Lebar penuh
//                             backgroundColor: "#AAB396",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             padding: "10px",
//                             marginBottom: "30px",
//                             boxSizing: "border-box",
//                         }}
//                     >
//                         <div style={{textAlign: "left", flex: 1, padding: "10px"}}>
//                             <h3 className="font-bold text-2xl">{post.title}</h3>
//                             <p className="text-xl">{post.content}</p>
//                             <small>Posted by: {post.name}</small>
//                         </div>
//                         <button
//                             onClick={() => handleDelete(post._id)} // Tambahkan fungsi untuk menghapus post
//                             style={{
//                                 backgroundColor: "transparent",
//                                 border: "none",
//                                 color: "red",
//                                 cursor: "pointer",
//                                 fontSize: "14px",
//                             }}
//                         >
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

