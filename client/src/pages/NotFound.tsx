import { Link } from 'react-router-dom';
import { FileX, Home, Plus } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <FileX className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-black text-foreground mb-4 font-sans">
          Oops! Page Not Found
        </h1>

        {/* Helpful Message */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          It looks like the note you're looking for doesn't exist. You can go
          back to your notes or create a new one.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="space-y-3 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            Go to My Notes
          </Link>

          <Link
            to="/notes/new"
            className="w-full bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2 border border-border"
          >
            <Plus className="w-4 h-4" />
            Create New Note
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
