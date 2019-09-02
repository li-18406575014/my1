package com.hyxy.service;

import java.util.List;
import java.util.Map;

import com.hyxy.entity.Jieshao;

public interface JieshaoService {

	void addIncreased(Map<String, String> map);

	List<Jieshao> selectCommodity();

}
