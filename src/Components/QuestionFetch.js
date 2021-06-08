

export const QuestionFetch = async (category) => {

    const URL = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`

    const response = await fetch(URL)

    const questions = await response.json()

    const returnArr = await questions.results

    console.log('Return Arr:', returnArr)

    return returnArr
}
