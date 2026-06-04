import { Link } from 'react-router-dom'

const DFooter = () => {
    return (
        <footer className="bg-[#fcfbf8] border-t border-[#ddd6c8] pt-12 pb-8 px-6 md:px-12 text-[#2d2a26]">
            <div className="max-w-281.5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Column 1: Brand & Description */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#d6d2c7] bg-white shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26" height="26" role="img" aria-label="JuicyHealthy">
                                <defs>
                                    <clipPath id="jh-citrus-footer"><path d="M24.4 37 C35 29.5 38.5 21.5 34.5 14.5 C27.5 13 24 19 24.4 27 Z"/></clipPath>
                                </defs>
                                <path d="M23.6 37 C13 29.5 9.5 21.5 13.5 14.5 C20.5 13 24 19 23.6 27 Z" fill="#2F9E57"/>
                                <path d="M24.4 37 C35 29.5 38.5 21.5 34.5 14.5 C27.5 13 24 19 24.4 27 Z" fill="#F5A12E"/>
                                <g clipPath="url(#jh-citrus-footer)" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.92">
                                    <line x1="24" y1="36" x2="29" y2="17"/>
                                    <line x1="24" y1="36" x2="33" y2="20"/>
                                    <line x1="24" y1="36" x2="35" y2="25"/>
                                    <line x1="24" y1="36" x2="34" y2="30"/>
                                </g>
                                <path d="M23.6 37 C20.5 31 18 25.5 15.5 19.5" stroke="#ffffff" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" fill="none"/>
                            </svg>
                        </div>
                        <span className="text-[15px] font-bold tracking-wide">
                            <span className="text-[#202020]">Juicy</span><span className="text-[#2F9E57]">Healthy</span>
                        </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-[#8e8a83] max-w-xs">
                        เราคือจุดเริ่มต้นของคุณภาพชีวิตที่ดี
                        คัดสรรวัตถุดิบออร์แกนิกส่งตรงถึงบ้าน
                        เพื่อสุขภาพที่ยั่งยืนของทุกคน
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-[14px] font-bold mb-5 text-[#202020]">
                        เมนูแนะนำ
                    </h4>
                    <ul className="space-y-3 text-[13px] text-[#8e8a83]">
                        <li>
                            <Link
                                to="/catalog"
                                className="hover:text-[#5B8C5A] transition"
                            >
                                อกไก่ปั่น
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/catalog"
                                className="hover:text-[#5B8C5A] transition"
                            >
                                สลัด & Bowl
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/etc2"
                                className="hover:text-[#5B8C5A] transition"
                            >
                                Meal Plan
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/etc1"
                                className="hover:text-[#5B8C5A] transition"
                            >
                                เกี่ยวกับเรา
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Contact & Team */}
                <div>
                    <h4 className="text-[14px] font-bold mb-5 text-[#202020]">
                        ทีมผู้พัฒนา
                    </h4>
                    <ul className="space-y-3 text-[13px] text-[#8e8a83]">
                        <li className="flex items-center gap-2">
                            <span className="font-semibold text-[#5B8C5A]">
                                Project:
                            </span>{' '}
                            Debug Impact Five
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="font-semibold text-[#5B8C5A]">
                                Cohort:
                            </span>{' '}
                            JSD12
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="max-w-281.5 mx-auto border-t border-[#eee7db] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[12px] text-[#aaa295]">
                    © 2026 Juicy Healthy. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#aaa295] font-medium uppercase tracking-widest">
                    <span>Debug Impact Five</span>
                    <span className="text-[#d7d1c5]">|</span>
                    <span>JSD12</span>
                </div>
            </div>
        </footer>
    )
}

export default DFooter
