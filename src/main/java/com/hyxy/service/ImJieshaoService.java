package com.hyxy.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hyxy.dao.JieshaoMapper;
import com.hyxy.entity.Jieshao;

@Service
public class ImJieshaoService implements JieshaoService {

	@Resource
	private JieshaoMapper jieshaoMapper;

	@Override
	public void addIncreased(Map<String, String> map) {
		jieshaoMapper.addIncreased(map);
	}

	@Override
	public List<Jieshao> selectCommodity() {
		List<Jieshao> list = jieshaoMapper.selectAll();
		return list;
	}

}
