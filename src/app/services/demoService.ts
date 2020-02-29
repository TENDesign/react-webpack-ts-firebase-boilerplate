import {store} from '../firebase-app/firebase-app';

export async function getDocument() {
    const req = await store.collection('demo').doc('4UDTwBEaDKNYAD3VrgLa').get();
    return req.data() as DemoContent;
}

export interface DemoContent {
    firstName: string;
    lastName: string;
}
