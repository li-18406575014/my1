package com.hyxy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hyxy.entity.Userxx;
import com.hyxy.service.LoginService;

@Controller
@RequestMapping("RearLogin")
public class RearLogin {

	@Resource
	private LoginService LoginService;
	@ResponseBody
	@RequestMapping("login")
	public Object login(String username,String password) {
		Map<String, String> map = new HashMap<>();
		map.put("name", username);
		map.put("password", password);
		List<Userxx> list2 = LoginService.selectUserxx(map);
		if (list2.size()>0) {
			Map<String, String> map1 = new HashMap<>();
			map1.put("message", "³É¹¦");
			return map1;
		}
		return "redirect:/login.jsp";
	}
	
	@RequestMapping("logining")
	public String logining() {
		return "index";
	}
	
}
