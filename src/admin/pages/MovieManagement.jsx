import { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import toast from "react-hot-toast";

const MovieManagement = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [importTmdbId, setImportTmdbId] = useState("");
  const [importing, setImporting] = useState(false);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await axiosClient.get(`/movies?search=${search}&page=1&pageSize=50`);
      setMovies(res.data.data || res.data || []);
    } catch (error) {
      toast.error("Lỗi khi tải danh sách phim");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchMovies();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleImport = async (e) => {
    e.preventDefault();
    if (!importTmdbId) return;

    try {
      setImporting(true);
      await axiosClient.post(`/admin/movies/${importTmdbId}/import`);
      toast.success("Import phim thành công!");
      setImportTmdbId("");
      fetchMovies();
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi khi import phim");
    } finally {
      setImporting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa phim này?")) return;
    try {
      await axiosClient.delete(`/admin/movies/${id}`);
      toast.success("Đã xóa phim");
      fetchMovies();
    } catch (error) {
      toast.error("Lỗi khi xóa phim");
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Quản lý Phim</h1>
          <p className="text-gray-400 text-sm mt-1">Danh sách phim trong hệ thống</p>
        </div>
        
        <form onSubmit={handleImport} className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Nhập TMDB ID..." 
            value={importTmdbId}
            onChange={(e) => setImportTmdbId(e.target.value)}
            className="bg-[#0f111a] border border-[#2b3561] text-white text-sm rounded-lg py-2 px-3 focus:outline-none focus:border-mainblue transition-all"
          />
          <button 
            type="submit"
            disabled={importing}
            className="bg-mainblue hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {importing ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-cloud-arrow-down"></i>}
            Import
          </button>
        </form>
      </div>

      <div className="bg-[#0f111a] border border-[#2b3561] rounded-2xl overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-[#2b3561] flex items-center justify-between">
          <div className="relative w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Tìm kiếm phim..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1b1d29] border border-[#2b3561] text-white text-sm rounded-lg py-2 pl-9 pr-3 focus:outline-none focus:border-mainblue transition-all"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="text-xs text-gray-400 uppercase bg-[#1b1d29] border-b border-[#2b3561]">
              <tr>
                <th className="px-6 py-4 font-medium">Phim</th>
                <th className="px-6 py-4 font-medium">Năm</th>
                <th className="px-6 py-4 font-medium">Thể loại</th>
                <th className="px-6 py-4 font-medium text-center">Đánh giá</th>
                <th className="px-6 py-4 font-medium text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    <i className="fa-solid fa-circle-notch fa-spin text-2xl mb-2"></i>
                    <p>Đang tải dữ liệu...</p>
                  </td>
                </tr>
              ) : movies.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    Không tìm thấy phim nào.
                  </td>
                </tr>
              ) : (
                movies.map((movie) => (
                  <tr key={movie.id} className="border-b border-[#2b3561] hover:bg-[#1b1d29] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://image.tmdb.org/t/p/w92${movie.posterPath}`} 
                          alt={movie.title} 
                          className="w-10 h-14 object-cover rounded shadow-sm"
                          onError={(e) => e.target.src = '/movie.svg'}
                        />
                        <div>
                          <div className="font-semibold text-white truncate max-w-xs" title={movie.title}>{movie.title}</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs">{movie.originalTitle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : 'N/A'}</td>
                    <td className="px-6 py-4 truncate max-w-xs" title={movie.genreNames}>{movie.genreNames}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-amber-500/20 text-amber-400 py-1 px-2 rounded-md font-semibold text-xs border border-amber-500/30">
                        <i className="fa-solid fa-star mr-1"></i> {movie.ratingAvg > 0 ? movie.ratingAvg : 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleDelete(movie.id)}
                        className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-500/10 transition-colors"
                        title="Xóa"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-[#2b3561] flex items-center justify-between text-sm text-gray-400">
          <span>Hiển thị 50 phim</span>
        </div>
      </div>
    </div>
  );
};

export default MovieManagement;
