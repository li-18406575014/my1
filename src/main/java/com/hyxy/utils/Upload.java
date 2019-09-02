package com.hyxy.utils;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

public class Upload {
	public List<Map<String, String>> uploadfile(HttpServletRequest request, MultipartFile[] files) {
	      //返回所有上传成功的图片路径集合
		   List<Map<String, String>> list = new ArrayList<>();
	      
	      Map<String, String> map = new HashMap<>();
	      // 图片存放路径,将上传文件保存在tomcat服务器路径下
	      String savePath = request.getServletContext().getRealPath("/serverimg");
	      map.put("savePath", savePath);
	      System.out.println(savePath);
	//F:\eclipse\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\springmvc\serverimg

	      File file = new File(savePath);
	      // 如果目录不存在
	      if (!file.exists()) {
	         // 创建目录
	         file.mkdirs();
	      }

	      if (files != null && files.length > 0) {
	         for (int i = 0; i < files.length; i++) {
	            // 得到上传的文件名字
	            String imgname = files[i].getOriginalFilename();
	            if (imgname!=null && imgname!="") {
	               // 得到上传文件的扩展名
	               String fileExtName = imgname.substring(imgname.lastIndexOf("."));
	               // 保存的文件名生成uuid
	               String filename = makeFileName(fileExtName);
	               // 图片存放路径
	               String filePath = savePath + "/" + filename;

	               // 访问图片路径，往数据库里放直接可以显示图片的路径
	               //String basePath = "http://localhost:8080"+request.getContextPath()+"/serverimg/";
	               //String path = basePath + "/" + filename;
	               // 访问图片路径，往数据库里放上传后的图片名字，路径需要前台自已写
	               String path = filename;

	               File saveDir = new File(filePath);
	               if (!saveDir.getParentFile().exists()) {
	                 saveDir.getParentFile().mkdirs();
	               }

	               // 转存文件
	               try {
	                 files[i].transferTo(saveDir);
	               } catch (Exception e) {
	                 // TODO Auto-generated catch block
	                 e.printStackTrace();
	               }
	               map.put("path", path);
	            }
	         }
	      }
	      list.add(map);
	      return list;
	   }

	   private String makeFileName(String fileExtName) {
	      // 为防止文件覆盖的现象发生，要为上传文件产生一个唯一的文件名
	      return UUID.randomUUID().toString().replace("-", "") + fileExtName;
	   }
}
 
