const introContent = [
    {
        content: `<h3>Introduction</h3>
        <hr />

        <p>Aditya is my name.</p>
        <br />
        <p>This is my personal blog website, where I just post anything from projects that I’m doing to me just talking about my opinion on certain subjects, rants you might call it. I’ll make an effort to remain transparent in everything I do, as trust is a two-way relationship, but no promises :) LOL. I mean it’s like the Japanese proverb, “The first face, you show to the world. The second face, you show to your close friends, and your family. The third face, you never show anyone,” and technology, especially social media, allows a person to show their first face to the world.</p>

        <br />
        <p>Though you can trust me :)</p>
        {showImage && <img src="https://thumbor.forbes.com/thumbor/200x200/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401" alt="pfp"/>}
        {!(showImage) && <button className="btn btn-outline-dark" onClick={() => { setShowImage(true) }}>Show Image</button>}
        <p>^ that's me</p>

        <br />
        <p>Maybe I’ll live to regret what I post here, people always did tell me to be careful what you post on the internet as it stays there forever and they are not wrong, but with the advent of social media that advice is barely followed. So screw it I guess.</p>

        <br />
        <p>I hope non-video content and media doesn’t bore people too much.</p>

        <br />
        <p>Browse to your heart's content :)</p>`,
        name: "Introduction",
        id: "introduction",
        active: true
    },
    {
        content: `<h3>What to Expect</h3>
        <hr />

        <p>Expect the best, prepare for the worst.</p>
        <br />

        <p>If you can't already tell, I like proverbs and quotes. Large amounts of information provided in a convenient way, short and sweet. Honestly, I’ll just do what I find interesting at the moment, most of the time that is working on projects but who knows what the future will be.</p>
        <br />

        <p>Here’s a list of what you can expect from the threads:</p>
        <ul>
            <li>Current or Finished Projects</li>
            <li>Rants, Opinions, and my Thoughts on a subject</li>
            <li>Sharing bit and parts of my life / experiences</li>
        </ul>
        <br />

        <p>You can ask me questions, as I’m working on making user interaction features. Everything from being able to like, comment, and ask questions in its own section of the website. I like to think that I’m a rational person, so I’ll try to answer any question from an objective view.</p>
        <br />

        <p>Q: Am I funny?</p>
        <p>A: My family thinks so 😢</p>`,
        name: "What to Expect",
        id: "what-to-expect",
        active: false
    },
    {
        content: `<h3>Why I Made This</h3>
        <hr />

        <p>To be honest, I don’t like the current state of social media, especially apps like TikTok. Most of these mainstream applications are made to keep users hooked for long periods of time, they take large amounts of information from the users without the user’s knowledge of what’s being taken, and they censor pretty harshly. These platforms are able to elect the next world leader, and I think for the amount of power they hold they don’t take the responsibility of using that power.</p>
        <br />

        <p>TLDR; I don’t feel comfortable posting content on different social media platforms.</p>
        <br />

        <p>Also, I want to get an internship at a tech company and a blog website is perfect to show that I know certain technologies and is a killer project in a resume.</p>`,
        name: "Why I Made This",
        id: "why-i-made-this",
        active: false
    }/*,
    {
        content: `<h1>This is Question</h1>`,
        name: "Questions?",
        id: "questions",
        active: false
    }*/
]
//export
export default introContent;