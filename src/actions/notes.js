import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()

        }

        const collectionPath = `${uid}/journal/notes` ;
        
        const doc = await db.collection(collectionPath).add(newNote);

        dispatch(activeNotes (doc.id, newNote));
        
    }
}

export const activeNotes= (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})