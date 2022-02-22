import { useState, useEffect, useContext } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
    const [num, setNum] = useState(0);
    const onClickButton = () => {
        // alert();
        // setNum(num + 1);
        setNum((prev) => prev + 1);
    };
    useEffect(() => {
        alert("変更されました");
    }, [num]);

    // Context内のisAdminと更新関数を取得
    const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // 切り替え押下時
    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <>
            <h1>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <div>
                {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
                <button onClick={onClickSwitch}>切り替え</button>
                <Card />
            </div>
        </>
    );
}