import { useState } from "react"
import Ollama from "ollama"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function Chatbot() {
    // Add state for input, messages, loading, and error.
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleAsk = async () => {
        // Prevent empty submissions and duplicate submissions while loading.
        if (!input.trim() || isLoading) return
        // Create a user message object.
        const newMessage = {
            role: "user",
            content: input.trim()
        }
        // Add the user message to the message thread.
        const updatedMessages = [...messages, newMessage]
        setMessages(updatedMessages)
        // Clear the input, reset errors, and turn loading on.
        setInput("")
        setError("")
        setIsLoading(true)
        // Call Ollama.chat with model "llama3.2" and the updated message history.
        try {
            const res = await Ollama.chat({
                model: "llama3.2",
                messages: updatedMessages
            })
            // Add the assistant response to the message thread.
            const assistantMessage = res.message
            setMessages((prevMessages) => ([...prevMessages, assistantMessage]))
        }
        catch (err) {
            // Show a helpful error if the request fails.
            console.error(err)
            setError("Failed to get response from Ollama")
        }
        finally {
            // Turn loading off after success or failure.
            setIsLoading(false)
        }
    }

    const clearChat = () => {
        setInput("")
        setMessages([])
        setError("")
    }

    return (
        <div className="uk-margin-medium-top">
            <header>
                <h1>Kaffbot</h1>
                <h3 className="uk-margin-remove-top">
                    Ask questions about the café and its inventory!
                </h3>
            </header>

            <p>
                Ask about general coffee-related topics.
                Do not enter private, sensitive, or personal information.
            </p>

            <div className="uk-form-stacked">
                <label htmlFor="chat-prompt" className="uk-form-label">
                    Ask the Kaffbot
                </label>
                <input
                    id="chat-prompt"
                    type="text"
                    className="uk-input uk-width-1-1 uk-width-1-2@l"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about delicious coffee..."
                />
            </div>

            {/* Configure buttons */}
            <div className="uk-margin-small uk-margin-medium-bottom uk-grid uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-6@l uk-align-center">
                <button className="uk-button uk-button-default" onClick={handleAsk} disabled={!input.trim()}>Send</button>
                <button className="uk-button uk-button-default uk-margin-small-left" onClick={clearChat} disabled={messages.length === 0}>Clear thread</button>
            </div>

            <div className="">
                {/* Render user and assistant messages here. */}
                {messages.map((msg, i) => (
                    <article key={i} className={"uk-card"}>
                        <div className="uk-card-title">
                            {msg.role === "user" ? "You" : "Assistant"}
                        </div>
                        <div className="uk-card-body uk-margin-remove-bottom uk-padding-remove-top uk-width-1-1 uk-width-1-2@l uk-align-center">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {msg.content}
                            </ReactMarkdown>
                        </div>
                    </article>
                ))
                }

                {/* Render a temporary Assistant / Thinking... message while loading. */}
                {isLoading && (
                    <article className="uk-card">
                        <div className="uk-card-title">Assistant</div>
                        <p>Thinking...</p>
                    </article>
                )}
            </div>

            <div>
                {error && (
                    <p style={{ color: "red" }}>Error: {error}</p>
                )}
            </div>
        </div>
    )
}