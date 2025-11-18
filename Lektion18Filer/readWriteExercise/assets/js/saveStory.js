
const saveButton = document.getElementById('saveStoryButton')

saveButton.addEventListener('click', async () => {
    const storyTextAreaElement = document.getElementById('storyTextArea')
    const storyText = storyTextAreaElement.value
    try {
        const updatedStoryText = await updateStory(storyText)
        storyTextAreaElement.value = updatedStoryText
    } catch (error) {
        throw new Error(`Error on saveButton.addEventListener: ${error.message}`)   
    }
})

async function updateStory (updatedStoryText) {
    const data = await fetch('/updateStory', {
        method: 'POST',
        body: JSON.stringify({ storyText: updatedStoryText }),
        headers: {
            "content-type": "application/json"
        }
    })
    const json = await data.json()
    return json.storyText
}