import React, { useEffect, useState } from "react";
import { IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonListHeader, useIonViewWillEnter } from "@ionic/react";
import DiscoverListItem from "./DiscoverListItem";
import { AttractionItem } from "../models/defaultModels";
import { connect } from "../data/context/connect";

interface DiscoverListProps {
  attractions: AttractionItem[];
}

const DiscoverList: React.FC<DiscoverListProps> = ({ attractions }) => {
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [listData, setListData] = useState<AttractionItem[]>([]);

  const pushData = () => {
    const start = listData.length;
    const end = listData.length + Math.min(5, attractions.length - listData.length);

    const newData: AttractionItem[] = [];
    for (let i = start; i < end; i++) {
      newData.push(attractions[i]);
    }

    setListData([...listData, ...newData]);
  };

  const loadData = (ev: any) => {
    pushData();
    ev.target.complete();
  };

  useIonViewWillEnter(() => {
    pushData();
  });

  useEffect(() => {
    if (listData.length === attractions.length) {
      setInfiniteDisabled(true);
    }
  }, [attractions.length, listData]);

  useEffect(() => {
    setListData([]);
  }, [attractions]);

  useEffect(() => {
    if (listData.length === 0 && attractions.length > 0) {
      pushData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listData]);

  if (attractions.length === 0) {
    return (
      <IonList>
        <IonListHeader>No results found</IonListHeader>
      </IonList>
    );
  } else {
    return (
      <>
        {/* <IonList> */}
          {listData.map((item, index: number) => (
            <DiscoverListItem data={item} key={`attraction-item-${index}`} />
          ))}
        {/* </IonList> */}
        <IonInfiniteScroll onIonInfinite={loadData} threshold="100px" disabled={isInfiniteDisabled}>
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </>
    );
  }
};

export default DiscoverList;
