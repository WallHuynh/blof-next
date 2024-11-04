import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Đăng nhập</h2>

      <form id="registrationForm" className="space-y-4">
        <div className="text-left">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Tên
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Nhập tên của bạn"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          ></input>
        </div>

        <div className="text-left">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Nhập email của bạn"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          ></input>
        </div>

        <div className="text-left">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Nhập mật khẩu"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          ></input>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 text-white p-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
        >
          Đăng ký
        </button>

        <div id="confirmationMessage" className="text-sm mt-4"></div>
      </form>
    </div>
  );
}
