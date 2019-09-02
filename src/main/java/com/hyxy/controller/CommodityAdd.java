package com.hyxy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.hyxy.entity.Jieshao;
import com.hyxy.service.JieshaoService;
import com.hyxy.utils.Upload;

@Controller
@RequestMapping("CommodityAdd")
public class CommodityAdd {

	@Resource
	private JieshaoService JieshaoService;
	// 跳转到商品新增页面
	@RequestMapping("goToCommodityAdd")
	public String goToCommodityAdd(Map<String, Object> map2) {

		List<Jieshao> list = JieshaoService.selectCommodity();
		map2.put("ban", list);
		return "goods-add";
	}

	// 点击新增，跳转到新增页面
	@RequestMapping("addCommodity")
	public String addCommodity() {
		return "good-add2";
	}
	
	//实现图片上传
	@RequestMapping("imgPreview")
	@ResponseBody
	public List<Map<String, String>> imgPreview(Map<String, Object> map, HttpServletRequest request,HttpServletResponse response, @RequestParam(value = "banner", required = false) MultipartFile[] img) {
		Upload upload = new Upload();
		List<Map<String,String>> list= upload.uploadfile(request, img);
		Map<String, Object> map3 = new HashMap<>();
		map3.put("list", list);
//		for (Map<String, String> map2 : list) {
//			String path = map2.get("path");
//			String savePath = map2.get("savePath");
//		}
		return list;
	}
	//获取到页面传来的数据
	@RequestMapping("addIncreased")
	@ResponseBody
	public Map<String, String> addIncreased(@RequestParam Map<String, String> map) {
		
		String banner = map.get("banner");
		String banner1 = map.get("banner1");
		String path = banner1+"\\"+banner;
		map.put("path", path);
		JieshaoService.addIncreased(map);
		Map<String, String> map1 = new HashMap<String, String>();
		map1.put("message", "成功");
		return map1;
	}
}
