//
//  DCUni.swift
//  DCGetElementByID
//
//  Created by DCloud-iOS-XHY on 2024/7/8.
//

import DCloudUniappRuntime

public class DCGetElementByID {
    /// 返回一个匹配特定 ID 的元素， 如果不存在，返回 null 规则同 https://doc.dcloud.net.cn/uni-app-x/api/get-element.html#getelementbyid
    public static func dcGetElementById(_ id: String) -> UniElement? {
        let appManager = UniSDKEngine.self.getAppManager()
        if let app = appManager.getCurretApp(),
           let pageManager = app.pageManager as? UniPageManagerImpl,
           let page = pageManager.getTopPage(),
           let domManager = page.document as? UniDomManager {
            return domManager.getElementById(id)
        }
        return nil
    }
}
