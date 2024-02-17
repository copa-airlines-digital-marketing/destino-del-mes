// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
      
    <div id="destinationOfTheMonth" class="cm-design-sytem styles-override" data-aos="fade-down">

    <div class="container mt-6 mb-6">
        <section class="lp-section">
            <div class=" d-none d-block flex-wrap align-items-end justify-content-center mt-6 mb-2">
                <div class="selectorCent"><label for="promocardholderoriginselect">Select your city of
                        origin</label><select name="origin" id="promocardholderoriginselect" data-filter-by="data-oac">
                        <option value="null">All origins</option>
                        <option value="GUA">Guatemala</option>
                        <option value="SDQ">Santo Domingo</option>
                        <option value="GYE">Guayaquil</option>
                        <option value="UIO">Quito</option>
                    </select></div>
            </div>
            <div class="custom-pw-container mt-3 justify-content-center" data-add-functionalities
                data-paginator-id="atlantaholderpaginator" data-filters-id="[&quot;promocardholderoriginselect&quot;]">

                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="VVI" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 615" data-return-date="2024-01-26"
                    data-title="Santa Cruz to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=VVI&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Santa Cruz (VVI)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">688</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">615<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="PUJ" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 595" data-return-date="2024-01-26"
                    data-title="Punta Cana to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=PUJ&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Punta Cana (PUJ)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">690</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">595<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="SDQ" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 653" data-return-date="2024-01-26"
                    data-title="Santo Domingo to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=SDQ&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Santo Domingo (SDQ)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">797</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">653<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="GYE" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 564" data-return-date="2024-01-26"
                    data-title="Guayaquil to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=GYE&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Guayaquil (GYE)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">635</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">564<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="UIO" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 494" data-return-date="2024-01-26"
                    data-title="Quito to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=UIO&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Quito (UIO)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">593</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">494<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="XPL" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 593" data-return-date="2024-01-26"
                    data-title="Comayagua, Tegucigalpa to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=XPL&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Comayagua, Tegucigalpa (XPL)</span><span class="custom-pw__dst">to
                        Monterrey (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span
                        class="custom-pw__dts">Oct 02, 2023 - Feb 29, 2024</span><span
                        class="custom-pw__prc custom-pw__prc--before"><span class="custom-pw__prc__frm">before
                            from</span><span class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">733</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">593<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="SAP" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 515" data-return-date="2024-01-26"
                    data-title="San Pedro Sula to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=SAP&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">San Pedro Sula (SAP)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">563</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">515<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="MGA" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 467" data-return-date="2024-01-26"
                    data-title="Managua to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=MGA&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Managua (MGA)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">520</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">467<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="LIM" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 541" data-return-date="2024-01-26"
                    data-title="Lima to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024" data-promo-code=""
                    data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=LIM&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Lima (LIM)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">630</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">541<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="ASU" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 595" data-return-date="2024-01-26"
                    data-title="Asunción to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=ASU&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Asunción (ASU)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">759</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">595<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="MVD" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 740" data-return-date="2024-01-26"
                    data-title="Montevideo to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=MVD&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Montevideo (MVD)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">1003</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">740<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="CCS" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 681" data-return-date="2024-01-26"
                    data-title="Caracas to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=CCS&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Caracas (CCS)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">891</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">681<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="VLN" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 767" data-return-date="2024-01-26"
                    data-title="Valencia to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=VLN&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Valencia (VLN)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">1099</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">767<sup>*</sup></span></span></a>
                <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="MAR" data-dac="MTY"
                    data-departure-date="2024-01-18" data-price="USD 682" data-return-date="2024-01-26"
                    data-title="Maracaibo to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                    data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                    href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=MAR&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                        class="custom-pw__ori">Maracaibo (MAR)</span><span class="custom-pw__dst">to Monterrey
                        (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                        2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                            class="custom-pw__prc__frm">before from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val custom-pw__prc__val--before">969</span></span><span
                        class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                            class="custom-pw__prc__crc">USD</span><span
                            class="custom-pw__prc__val">682<sup>*</sup></span></span></a>
                <div class="d-flex justify-content-center mb-3">
                    <button class="button button--secondary button--secondary-outline d-none"
                        id="atlantaholderpaginator">Ver
                        más</button>
                </div>
            </div>
            <p class="text-center">*Restrictions apply; please see <a href="terms-and-conditions#destinationOfTheMonth"
                    target="_blank">Terms and Conditions</a>.</p>
        </section>
    </div>
</div>
      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();