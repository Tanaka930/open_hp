

export default function CompanyAbout(){
  return(
    <>
    <div className="px-2 py-2 md:py-12 md:w-8/12 w-full">
                    <table className="w-full text-left md:w-2/3  md:mx-auto">
                      <tbody>
                        <tr className="">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-2/12 md:p-5 md:table-cell">会社名</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-5 md:table-cell">オープンストア株式会社</td>
                        </tr>
                        <tr className="">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-2/12 md:p-5 md:table-cell">資本金</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-5 md:table-cell">200万円</td>
                        </tr>
                        <tr className="">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-2/12 md:p-5 md:table-cell">設立</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-5 md:table-cell">令和3年3月3日</td>
                        </tr>
                        <tr className="">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-2/12 md:p-5 md:table-cell">代表者氏名</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-5 md:table-cell">代表取締役　大森道秋</td>
                        </tr>
                        <tr className="">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-2/12 md:p-5 md:table-cell">従業員数</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-5 md:table-cell">36人</td>
                        </tr>
                        <tr className="">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider align-top md:w-2/12 md:p-5 md:table-cell">所在地</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-5 md:table-cell">
                            <address className="mb-6">
                              大阪本社　〒532-0012　大阪府大阪市淀川区木川東４丁目５-３ オパル新大阪ビル
                            </address>
                            <address className="mb-2">
                              東京本社　〒162-0801　東京都新宿区山吹町261-5 トリオ・セントラルタワー
                            </address>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
    </>
  )
}