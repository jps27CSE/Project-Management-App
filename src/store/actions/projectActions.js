export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            authFirstName: 'jack',
            authLastName: 'pritom',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project })
        }).catch((err) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", err })
        })

    }
}