/*global kakao */
import React, { useState } from "react";
import $script from "scriptjs";

const MapBuilder = ({ tlList }) => {
    const [linePath, setLinePath] = useState([]);
    const [loadMap, setLoadMap] = useState(false);
    const [loadFirst, setLoadFirst] = useState(true);
    const kakao_url = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=61375cd8589972b3a28cb21d56798474`;

    $script(kakao_url, () => {
        /*global kakao*/
        kakao.maps.load(function () {
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

                // setLinePath((prev) => [
                //     ...prev,
                //     new kakao.maps.LatLng(
                //         timeline.latitude,
                //         timeline.longitude
                //     ),
                // ]);

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                });

                // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
                var iwContent = `<div style="padding:5px;">${timeline.time}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                });

                // 마커에 마우스오버 이벤트를 등록합니다
                kakao.maps.event.addListener(marker, "mouseover", function () {
                    // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                    infowindow.open(map, marker);
                });

                // 마커에 마우스아웃 이벤트를 등록합니다
                kakao.maps.event.addListener(marker, "mouseout", function () {
                    // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                    infowindow.close();
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
            });

            // 지도에 표시할 선을 생성합니다
            // var polyline = new kakao.maps.Polyline({
            //     path: linePath, // 선을 구성하는 좌표배열 입니다
            //     strokeWeight: 5, // 선의 두께 입니다
            //     strokeColor: "#FFAE00", // 선의 색깔입니다
            //     strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            //     strokeStyle: "solid", // 선의 스타일입니다
            // });

            // 지도에 선을 표시합니다
            // polyline.setMap(map);

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
