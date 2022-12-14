import moment from 'moment';
import React from 'react';
import { commentInterface } from '../constant/interfaces';
import parse from 'html-react-parser';

const Comments = ({ comments }: { comments: commentInterface[] | [] }) => {
    return <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length}
            {' '}
            Comments
        </h3>
        {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                    <span className="font-semibold">{comment.name}</span>
                    {' '}
                    on
                    {' '}
                    {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
            </div>
        ))}
    </div>;
};

export default Comments;
