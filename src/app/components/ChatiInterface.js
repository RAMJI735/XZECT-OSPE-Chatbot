export default function Content() {
    return (
        <div className="flex justify-center">

      
        <div className="w-1/2 border-solid border-2 border-yellow-400 m-8 flex flex-col">
            <div>
                <h1 className="text-xl font-bold m-2">Welcome to Next.js AI Chatbot!</h1>

            </div>

            <div className="m-2">
                <p>This is an open source AI chatbot app template built with Next.js, the Vercel AI SDK, and Vercel KV.</p>

            </div>

            <div className="m-2">
                <p>It uses React Server Components to combine text with generative UI as output of the LLM. The UI state is synced through the SDK so the model is aware of your interactions as they happen.</p>

            </div>

        </div>
        </div>
    )
}