import produce from 'immer';

const INITIAL_STATE = {
    id: 0,
    title: '',
    job: '',
    graduated: false,
    dateFormatted: '',
    employer: '',
    institute: '',
    hiring: '',
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@itemList/STORE_REQUEST': {
                draft.id = action.payload.item.id;
                draft.title = action.payload.item.title;
                draft.job = action.payload.item.job;
                draft.graduated = action.payload.item.graduated;
                draft.dateFormatted = action.payload.item.dateFormatted;
                draft.employer = action.payload.item.employer;
                draft.institute = action.payload.item.institute;
                draft.hiring = action.payload.item.hiring;
                break;
            }
            case '@itemList/RESET_REQUEST': {
                draft.id = null;
                draft.title = '';
                draft.job = '';
                draft.graduated = false;
                draft.dateFormatted = '';
                draft.employer = '';
                draft.institute = '';
                draft.hiring = '';
                break;
            }
            default:
        }
    });
}
