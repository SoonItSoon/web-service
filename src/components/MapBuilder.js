/*global kakao */
import React, { useState } from "react";
import $script from "scriptjs";

const MapBuilder = ({ tlList, danger }) => {
    const [loadMap, setLoadMap] = useState(false);
    const [loadFirst, setLoadFirst] = useState(true);
    const kakao_url = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=61375cd8589972b3a28cb21d56798474`;

    $script(kakao_url, () => {
        /*global kakao*/
        kakao.maps.load(() => {
            if (!loadFirst) {
                return;
            }
            setLoadFirst(false);
            let container = document.getElementById("map");
            let options;
            if (tlList === []) {
                options = {
                    center: new kakao.maps.LatLng(37.49, 126.95),
                    level: 7,
                };
            } else {
                options = {
                    center: new kakao.maps.LatLng(
                        tlList[0].latitude,
                        tlList[0].longitude
                    ),
                    level: 7,
                };
            }

            const map = new kakao.maps.Map(container, options);

            tlList.map((timeline) => {
                // 마커가 표시될 위치입니다
                var markerPosition = new kakao.maps.LatLng(
                    timeline.latitude,
                    timeline.longitude
                );

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                });

                // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
                var marckerText = "";
                var iwContent = "";
                if (danger) {
                    const tmpDate = timeline.date.split("-");
                    marckerText += `${tmpDate[1]}월 ${tmpDate[2]}일 `;
                }
                const tmpTime = timeline.time.split(":");
                marckerText += `${tmpTime[0]}시 ${tmpTime[1]}분`;
                if (danger) {
                    iwContent = `<div class="timeline__map__marker">${marckerText}</div>`;
                } else {
                    iwContent = `<div class="timeline__map__marker">${marckerText} 위치</div>`;
                }
                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                });
                if (danger) {
                    infowindow.open(map, marker);
                } else {
                    // 마커에 마우스오버 이벤트를 등록합니다
                    kakao.maps.event.addListener(
                        marker,
                        "mouseover",
                        function () {
                            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                            infowindow.open(map, marker);
                            // customOverlay.setVisible(1);
                        }
                    );

                    // 마커에 마우스아웃 이벤트를 등록합니다
                    kakao.maps.event.addListener(
                        marker,
                        "mouseout",
                        function () {
                            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                            infowindow.close();
                            // customOverlay.setVisible(0);
                        }
                    );
                }
            });

            setLoadMap(true);
            console.log("Completed Load Map");
        });
    });

    return (
        <>
            {loadMap ? (
                <div id="map" className="timeline__map"></div>
            ) : (
                <>
                    <span className="timeline__map__span">Loading</span>
                    <div id="map" className="timeline__map"></div>
                </>
            )}
        </>
    );
};

export default MapBuilder;
