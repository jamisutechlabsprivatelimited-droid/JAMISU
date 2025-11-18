return (
  <div className="max-w-xl mx-auto shadow-sm px-5 pb-10 pt-6 mt-8">

    <form onSubmit={handleSubmit} className="space-y-5">
      {showSuccess && (
        <h3 className="bg-green/20 p-3 rounded-md font-medium">
          Thank you for reaching us. We will contact you shortly
        </h3>
      )}

      <div className="space-y-2">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Full Name" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="phoneNumber">Contact Number</label>
        <input type="text" name="phoneNumber" placeholder="Contact Number" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="john@gmail.com" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="message">Requirement</label>
        <textarea name="message" placeholder="Your Requirement / message" className="h-32" required />
      </div>

      {/* BUTTONS ROW */}
      <div className="flex items-center gap-4">
        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          aria-disabled={loading}
          className={`bg-green px-4 py-1.5 text-white rounded-sm cursor-pointer hover:opacity-80 ${
            loading && "opacity-50 cursor-wait"
          }`}
        >
          Submit
        </button>

        {/* Project Button */}
        <a
          href="https://your-project-link.com"   // <-- replace with your link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green px-4 py-1.5 text-white rounded-sm hover:opacity-80"
        >
          Project
        </a>
      </div>
    </form>
  </div>
);
