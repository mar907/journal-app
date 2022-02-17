import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
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
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes= await loadNotes (uid);
        dispatch (setNotes (notes));
    }
}

export const setNotes= (notes)=> ({
     type: types.notesLoad,
     payload: notes
});