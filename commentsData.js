import commentModel from './api/comments/commentModel';

const comments = [{
        'author': 'Person 1',
        'title': 'Some post 1',
        'content': 'Something being said by p1'
    },
    {
        'author': 'Person 2',
        'title': 'Some post 2',
        'content': 'Something being said by p2'
    },
    {
        'author': 'Person 3',
        'title': 'Some post 3',
        'content': 'Something being said by p3'
    },
    {
        'author': 'Person 4',
        'title': 'Some post 4',
        'content': 'Something being said by p4'
    },
    {
        'author': 'Person 5',
        'title': 'Some post 5',
        'content': 'Something being said by p5',
        'comments': [
            {
                '_id': 1,
                'author': 'Person 4',
                'title': 'Some reply post 5',
                'content': 'Something being said by p4',
                'comments':[]
            }
        ]
    },
];

export default async function loadContacts() {
    try {
        console.info("Adding data")
        await commentModel.deleteMany();
        await commentModel.collection.insert(comments);
        console.info(`${comments.length} comments were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load Comment Data: ${err}`);
    }
}