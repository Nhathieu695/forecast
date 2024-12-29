'use client'

import { useEffect, useState } from 'react'



export default function ResultsList({ results }: ResultsListProps) {
    const [selectedResult, setSelectedResult] = useState<| null>(null)

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });


    return (
        <div>
            <ul className="space-y-4">
                {results.map((result) => (
                    <li
                        key={result.id}
                        className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedResult(result)}
                    >
                        <h2 className="text-xl font-semibold">{result.title}</h2>
                        <p className="text-gray-600">{result.description}</p>
                    </li>
                ))}
            </ul>
            {selectedResult && (
                <div className="mt-8 p-4 bg-blue-100 rounded-lg">
                    <h3 className="text-lg font-semibold">Selected Result:</h3>
                    <p>{selectedResult.title}</p>
                </div>
            )}
        </div>
    )
}