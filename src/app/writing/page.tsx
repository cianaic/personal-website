'use client';

import { useState } from 'react';
import Link from 'next/link';

type Note = {
  id: number;
  title: string;
  link?: string;
  note: string;
  date: string;
  votes: number;
  tags: string[];
};

export default function Writing() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "The Compound Effect of Daily Learning",
      link: "https://example.com/compound-learning",
      note: "Small, consistent efforts in learning new technologies compound over time. The key is not to learn everything at once, but to maintain a steady pace of improvement.",
      date: "2024-12-15",
      votes: 42,
      tags: ["learning", "productivity"]
    },
    {
      id: 2,
      title: "Building in Public: Lessons Learned",
      note: "Sharing your work publicly, even when imperfect, creates valuable feedback loops and accountability. The fear of judgment is often worse than the reality.",
      date: "2024-11-28",
      votes: 38,
      tags: ["open-source", "community"]
    },
    {
      id: 3,
      title: "AI as a Thought Partner",
      link: "https://anthropic.com",
      note: "Modern AI systems are becoming increasingly valuable as thought partners, not just code generators. The key is learning how to collaborate effectively with them.",
      date: "2024-11-10",
      votes: 56,
      tags: ["ai", "productivity", "tools"]
    },
    {
      id: 4,
      title: "The Art of Simple Systems",
      note: "Complex systems that work evolve from simple systems that work. Starting simple and iterating is almost always better than trying to build the perfect system upfront.",
      date: "2024-10-22",
      votes: 31,
      tags: ["architecture", "engineering"]
    },
    {
      id: 5,
      title: "Documentation as a Superpower",
      note: "Good documentation is a force multiplier. It helps others understand your work, but more importantly, it helps future you understand what past you was thinking.",
      date: "2024-10-05",
      votes: 45,
      tags: ["documentation", "best-practices"]
    }
  ]);

  const handleVote = (id: number) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, votes: note.votes + 1 } : note
    ));
  };

  const sortedNotes = [...notes].sort((a, b) => b.votes - a.votes);

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-16 font-mono">
      <header className="mb-12">
        <Link href="/" className="text-sm hover:underline mb-8 inline-block">← Back</Link>
        <h1 className="text-2xl font-bold mb-4">Writing & Notes</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          As opposed to a traditional blog, this is a collection of links & corresponding notes 
          I keep to document learnings & opinions. I&apos;ve installed an upvoting system that has a 
          corresponding leaderboard - this is mostly for me to bump things I&apos;ve found most 
          significant while I reflect on my links. Feel free to bump something if you like.
        </p>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-6">Leaderboard</h2>
          <div className="space-y-2 text-sm mb-8">
            {sortedNotes.slice(0, 3).map((note, index) => (
              <div key={note.id} className="flex items-center justify-between">
                <span className="flex items-center">
                  <span className="text-gray-500 mr-3">{index + 1}.</span>
                  <span>{note.title}</span>
                </span>
                <span className="text-gray-500">{note.votes} votes</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-6">All Notes</h2>
          <div className="space-y-8">
            {notes.map(note => (
              <article key={note.id} className="border-b border-gray-200 dark:border-gray-800 pb-6">
                <h3 className="text-base font-semibold mb-2">
                  {note.link ? (
                    <a href={note.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {note.title} ↗
                    </a>
                  ) : (
                    note.title
                  )}
                </h3>
                <p className="text-sm mb-3">{note.note}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{note.date}</span>
                    <span>{note.tags.join(', ')}</span>
                  </div>
                  <button
                    onClick={() => handleVote(note.id)}
                    className="text-xs px-3 py-1 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    ↑ {note.votes}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}