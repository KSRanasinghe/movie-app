function PaginationRow({pages}) {
  const pageNos = [...Array(pages).keys()].map(i => i + 1);

  const handleClick = (page) => {
    alert(page);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-2">
        {
          pageNos.slice(0, 10).map((pageNo) => (
            <button key={pageNo} onClick={() => handleClick(pageNo)} className="w-9 h-10 flex justify-center items-center shrink-0 cursor-pointer font-arimo text-sm text-white font-medium border border-white/35 rounded-sm transition-all duration-500 hover:border-green-500 hover:bg-green-500">{pageNo}</button>
          ))
        }
      </div>
    </>
  )
}

export default PaginationRow