import Groq from 'groq-sdk';
const groq_api = import.meta.env.VITE_GROQ;

const groq = new Groq({
  apiKey : groq_api,
  dangerouslyAllowBrowser: true,
})

async function reqGroqAi(content){
  const reply = await groq.chat.completions.create({
    messages : [{
      role : "user",
      content,
    }],
    model : "mixtral-8x7b-32768",
  })
  return reply.choices[0].message.content;
}

export default reqGroqAi;