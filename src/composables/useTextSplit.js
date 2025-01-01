import { computed } from 'vue';

export function useTextSplit(text, highlighted = [], large = []) {
  const words = computed(() => {
    const words = text.match(/\S+|\s+/g);

    const addWord = (word) => {
      return {
        text: word,
        isLarge: large.includes(word),
        isHighlighted: highlighted.includes(word)
      };
    };

    return words.reduce((result, word, index, array) => {
      // Handle <br> and remove space right after it
      if (word === '<br>') {
        result.push(addWord(word));

        // Check if the next word is a space and skip it
        if (array[index + 1] === ' ') {
          array.splice(index + 1, 1); // Remove the space following <br>
        }
      } else if (word.includes('|')) {
        // If the word contains the '|' character, split it into two separate words
        const [firstPart, secondPart] = word.split('|');

        // Push each part separately
        result.push(addWord(firstPart));
        result.push(addWord(secondPart));
      } else {
        // Handle regular words
        result.push(addWord(word));
      }

      return result;
    }, []);
  });

  return { words };
}
