import React from 'react';

import "../css/tailwind.css";

type recordType = Record<string, string>;

interface RecordTableProps {
    records: recordType;
    onChoose: (record: string) => void;
    onDelete?: (record: string) => void;
}

export function RecordTable({ records, onChoose, onDelete }: RecordTableProps) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Label
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        選擇
                    </th>
                    {onDelete ? <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        刪除
                    </th> : <></>}

                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(records).map(([k, v], index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{k}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{v}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => onChoose(k)} className="text-indigo-600 hover:text-indigo-900 bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2">
                                選擇
                            </button>
                        </td>
                        {onDelete ? <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => onDelete(k)} className="text-red-600 hover:text-red-900 bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2">
                                刪除
                            </button>
                        </td> : <></>}
                    </tr>
                ))}
            </tbody>
        </table>

    );
}
