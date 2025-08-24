
const tale = "The old lighthouse keeper, with a face like a roadmap of forgotten seas, watched the storm roll in. A single, gnarled hand gripped a steaming mug of tea, its warmth a small defiance against the biting wind. Below, the waves crashed against the jagged rocks, each boom a metronome for the furious dance of the clouds. He had seen a thousand storms, but this one felt different—heavier, charged with a silence that seemed to swallow the usual roar. A stray cat, a ginger tabby with a torn ear, rubbed against his leg, purring a low, rumbling song of contentment. It was a strange juxtaposition: the violent chaos outside and the quiet peace within the small, circular room."
const wordSeperatedText = tale.toLowerCase().replace(/[.,]/g, "").split(" ");

function mapWordOccurance (words) {
    const wordMapList = [];
    
    // For each word object in words argument
    for (const word of words) {
        let wordAllreadyPresent = false;
        // For each wordMap object in wordMapList
        for (const currentWordMap of wordMapList) {
            if (word == currentWordMap.word) {
                currentWordMap.numberOfOccurrences += 1;
                wordAllreadyPresent = true;
                break;
            }
        }
        if (!wordAllreadyPresent) {
            // Construct new object
            const newWordMap = {
                word: word,
                numberOfOccurrences: 1
            };
            wordMapList.push(newWordMap);
        }
    }

    return wordMapList;
}

const result = mapWordOccurance(wordSeperatedText);

for (const wordMap of result) {
    console.log(`${wordMap.word}: ${wordMap.numberOfOccurrences}\n`);
}



