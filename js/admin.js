$(function(){
	$(".sti_li_right_tr .slrt_td1").each(function(){
		var adminHe = $(this).height();
		$(this).css("margin-top",-adminHe/2)
//		console.log(adminHe)
	});
	
	//智能排期点击搜索是的状态
	$(".tp_search input").focus(function(){
		$(".tp_search span").css("background-position-x","-150px")
	});
	$(".tp_search input").blur(function(){
		$(".tp_search span").css("background-position-x","-120px")
	});
	
	//只能投放方案内容的input获取焦点变色js
	$("input[type=text]").focus(function(){
		$(this).css("border-color","#3771EF")
	});
	$("input[type=text]").blur(function(){
		$(this).css("border-color","#cccccc")
	});
	
	
	//总预览选中添加阴影js
	$(".tab_table_tr").hover(function(){
		$(this).css("box-shadow","0 0 10px rgba(55,113,239,0.31)");
		$(this).find(".see_more").hide();
		$(this).find(".see_details").show();
	},function(){
		$(this).css("box-shadow","none");
		$(this).find(".see_more").show();
		$(this).find(".see_details").hide();
	});
	
	//智能排期tab选项
	var y;
	$(".tab_label li").on("click",function(){
		$(".tab_label li").removeClass("tab_active")
		$(this).addClass("tab_active")
		y = $(this).index();
		$(".tab_table").hide();
		$(".tab_table").eq(y).show();
	});
	
	//消息弹窗关闭
	$(".scmh_colse").on("click",function(){
		$(".sc_message_hints").hide()
	});
	$(".sc_message_hints a").on("click",function(){
		$(".sc_message_hints").hide();
		$(".mail_popup").show()
	});
	
	//智能排期日期的左右hover时间
	$(".ilctm_left_jt").hover(function(){
		$(this).css("background-position","-400px -288px")
	},function(){
		$(this).css("background-position","-364px -288px")
	});
	$(".ilctm_right_jt").hover(function(){
		$(this).css("background-position","-420px -288px")
	},function(){
		$(this).css("background-position","-384px -288px")
	});
	
	//智能排期中排期管理的提示关闭按键
	$(".ts_click_cue span").on("click",function(){
		$(this).parent(".ts_click_cue").hide();
	});
	
	//排期内容单选框js
	$(".irc_radio_style span").on("click",function(){
		$(".irc_radio_style span em").removeClass("ircrs_bule")
		$(this).find("em").addClass("ircrs_bule")
		$(".irc_radio_style input").attr("checked",false)
		$(this).siblings("input").attr("checked",true)
		$(".irc_radio_style span").removeClass("ircrs_span")
		$(this).addClass("ircrs_span")
	});
	
	//智能排期标签点击后显示在文本框里
	$(".ign_con span").on("click",function(){
		var Text = $(this).text();
		$(this).parent().siblings(".select").find(".pla p").text(Text)
	})
	
	
	//个人中心的弹窗
	$(".login_sign_in").toggle(function(){
		$(this).find(".lsi_sele").show()
	},function(){
		$(this).find(".lsi_sele").hide()
	});
	
	//审核弹窗显示
	$(".he_btn").on("click",function(){
		$(".ap_con,.mtgl_pop").hide();
		$(".admin_popup").show();
		$(".total_cost_change,.he_examine").show();
	});
	
	//提交审核弹窗js
	$(".examine_btn_a2").on("click",function(){
		$(".admin_popup").hide();
		$(".mtgl_pop,.ap_con").hide();
	});
	
	//邮件弹窗内容选中状态
	$(".mail_popup_con li").hover(function(){
		$(this).css("background","#f5f5f5")
	},function(){
		$(this).css("background","none")
	});
	
	//邮件弹窗的tab选项
	$(".mpch_tab").on("click",function(){
		var tabIndex = $(this).index();
		$(".mpc").hide();
		$(".mpc").eq(tabIndex).show();
		$(".mpch_tab").removeClass("mpch_active");
		$(this).addClass("mpch_active");
	});
	
	//邮件弹窗
	$(".mail_btn").on("click",function(){
		if($(".mail_popup").css("display") == "block"){
			$(".mail_popup").hide()
		}else{
			$(".mail_popup").show();
		}
	});
	
	//日期选择展开js
	$(".date_option").siblings(".pla").toggle(function(){
		$(".opti").hide();
		$(this).siblings(".opti").show();
		$(this).addClass("ign_bule")
	},function() {
		$(this).siblings(".opti").hide();
		$(this).removeClass("ign_bule")
	});
	
	$(".text_option").siblings(".pla").on("click",function(){
		$(".opti").hide();
		$(this).siblings(".opti").show();
		$(this).addClass("ign_bule")
	});
	
	//下拉菜单选择
	$(".text_option span").on("click",function(){
		var value = $(this).text();
		$(this).parents(".select").find(".pla_input p").text(value)
		$(".opti").hide()
		$(".pla").removeClass("ign_bule")
	})
	
	
	//渠道配置全选、多选、全不选的js
	$(".chec").on("click",function(){
		$(this).hide();
		$(".not_chec").show();
		$(".ca_td1 input").prop("checked",true);
		$(".ca_td1 label").css("border-color","#3c74ee")
		$(".ca_td1 label").find("span").css("background","url(../../ossweb-img/images/sprite.png) no-repeat -782px -288px")
	});
	$(".not_chec").on("click",function(){
		$(this).hide();
		$(".chec").show();
		$(".ca_td1 input").prop("checked",false);
		$(".ca_td1 label").css("border-color","#999999")
		$(".ca_td1 label").find("span").css("background","none")
	});
	var liLen = $(".li_tr").length-1;
	$(".ca_td1 label").on("click",function(){
		$(".chec").show();
		$(".not_chec").hide();
		var chec = $(this).find("input").prop("checked")
		if( chec == true){
			$(this).css("border-color","#3c74ee")
			$(this).find("span").css("background","url(../../ossweb-img/images/sprite.png) no-repeat -782px -288px")
		}else if(( chec == false)){
			$(this).css("border-color","#999999")
			$(this).find("span").css("background","none")
		}
		var chknum = $(".ca_td1 input").size();//选项总个数
		var chk = 0;
		$(".ca_td1 input").each(function () {  
	        if($(this).prop("checked")==true){
				chk++;
			}
	    });
	    if(chknum==chk){//全选
			$(".chec").hide();
			$(".not_chec").show();
		}else{//不全选
			$(".chec").show();
			$(".not_chec").hide();
		}
	    
	});

	//渠道配置弹窗js
	$(".channel_allocation_btn").on("click",function(){
		$(".ap_con,.mtgl_pop").hide()
		$(".admin_popup").show();
		$(".channel_allocation").show();
		$(".ca_table").mCustomScrollbar();
	});
	
	//缩略菜单导航js
	$(".tn_com_li").hover(function(){
		$(".tn_com_li").addClass("tn_gray")
		$(".thumbnail_nav").css("width","216px")
		$(".tn_logo").css({"width":"143px","background":"url(../../img/admin_logo.png) no-repeat"})
		$(".tn_com_li p").css("font-size","14px")
		$(this).find(".classify_con").show();
	},function(){
		$(".tn_com_li").removeClass("tn_gray")
		$(".thumbnail_nav").css("width","60px")
		$(".tn_logo").css({"width":"30px","background":"url(../../img/slt_logo.png) no-repeat"})
		$(".tn_com_li p").css("font-size","0")
		$(this).find(".classify_con").hide();
	});
	
	function sltHeight(){
		var lslHeoght = $(".level_scroll_left").height();
		$(".level_scroll_right").css("height",lslHeoght);
		var height = $(".right_con").height();
		console.log(height)
		$(".thumbnail_nav").css("height",height + 30)
	}
	sltHeight();
	
	//空白页高度
	var winHeight = $(window).height()
//	console.log($(window).height())
	$(".tbd_con_wrap").css("height",winHeight-100)
	
	//文件上传的文件名
	$("input[type=file]").change(function(){
	    var str=$(this).val();
	    console.log(str)
	    if(str!==""){
	        var arr=str.split("\\");
	        var file_name=arr[arr.length-1];
	        $(this).parents(".iac_file_con,.pc_media_file").find(".iac_file_con_text").text(file_name);
			$(this).parents(".iac_file_con,.pc_media_file").find(".iac_file_con_text").css("color","#333333");
			$(this).parents(".pci_file").find(".pcif_sele_con").show()
			$(this).parents(".pci_file").find(".pcif_sele_con p").text(file_name);
			$(this).parents(".pci_file label").hide()
			$(this).parents(".file_con").find(".file_con_text").text(file_name);
			$(this).parents(".file_con").find(".file_con_text").css("color","#333333");
			$(this).siblings(".file_text").text(file_name)
	    }
	});
	
	
	//重新上传与文件上传的label按键关联
	$(".mif_cxsc").on("click",function(){
		$(this).siblings(".mtglpc_input_file label").click()
	})
	
	
	//pc添加媒体弹窗
	$(".mpc_newly_build_left").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".add_media").show()
	});
	$(".admin_popup_close,.pp_close").on("click",function(){
		$(".admin_popup").hide();
		$(".mtgl_pop,.ap_con").hide();
		$(".mtgl_pop_con_box,.scroll").mCustomScrollbar("destroy");
	});
	
	//编辑pc媒体弹窗
	$(".mpc_con .modify").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".edit_media").show()
	});
	
	//PC媒体详情input获取焦点
	$(".pdc_top input").focus(function(){
		$(".pdc_magnifier").css("background-position-x","-150px")
	});
	$(".pdc_top input").blur(function(){
		$(".pdc_magnifier").css("background-position-x","-120px")
	});
	
	//PC媒体详情全选、多选、全不选的js
	$(".chec").on("click",function(){
		$(this).hide();
		$(".not_chec").show();
		$(".pdc_td1 input").prop("checked",true);
		$(".pdc_td1 label").css("border-color","#3c74ee")
		$(".pdc_td1 label").find("span").css("background","url(../../ossweb-img/images/sprite.png) no-repeat -782px -288px")
	});
	$(".not_chec").on("click",function(){
		$(this).hide();
		$(".chec").show();
		$(".pdc_td1 input").prop("checked",false);
		$(".pdc_td1 label").css("border-color","#999999")
		$(".pdc_td1 label").find("span").css("background","none")
	});
	$(".pdc_td1 label").on("click",function(){
		$(".chec").show();
		$(".not_chec").hide();
		var chec = $(this).find("input").prop("checked")
		if( chec == true){
			$(this).css("border-color","#3c74ee")
			$(this).find("span").css("background","url(../../ossweb-img/images/sprite.png) no-repeat -782px -288px")
		}else if(( chec == false)){
			$(this).css("border-color","#999999")
			$(this).find("span").css("background","none")
		}
		var chknum = $(".pdc_td1 input").size();//选项总个数
		var chk = 0;
		$(".pdc_td1 input").each(function () {  
	        if($(this).prop("checked")==true){
				chk++;
			}
	    });
	    if(chknum==chk){//全选
			$(".chec").hide();
			$(".not_chec").show();
		}else{//不全选
			$(".chec").show();
			$(".not_chec").hide();
		}
	});
	
	//删除媒体提示弹窗
	$(".delete,.sti_delete").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".mtgl_delete").show();
	})
	
	//PC详情新增广告位弹窗
	var n = 0;
	$(".pdcb_new_built").on("click",function(){
		$(".mtgl_pop").hide()
		$(".admin_popup").show();
		$(".newly_added").show();
		$(".mtgl_pop_con_box").mCustomScrollbar();
	})
	
	//PC详情新增广告位弹窗单选
	$(".mpc_radio1 label").on("click",function(){
		$(".mpc_radio1 label").removeClass("mpc_label")
		$(this).addClass("mpc_label")
	})
	$(".mpc_radio2 label").on("click",function(){
		$(".mpc_radio2 label").removeClass("mpc_label")
		$(this).addClass("mpc_label")
	})
	$(".mpc_radio3 label").on("click",function(){
		$(".mpc_radio3 label").removeClass("mpc_label")
		$(this).addClass("mpc_label")
	})
	$(".mpc_radio4 label").on("click",function(){
		$(".mpc_radio4 label").removeClass("mpc_label")
		$(this).addClass("mpc_label")
	})
	
	//PC详情新增广告位弹窗多选
	$(".mpc_multi_selection label").on("click",function(){
		var chec = $(this).siblings("input").prop("checked")
		if( chec == false){
			$(this).addClass("mrc_label_active")
		}else if(( chec == true)){
			$(this).removeClass("mrc_label_active")
		}
	});
	
	//获取代码链接弹窗
	$(".pdcb_obtain").on("click",function(){
		$(".mtgl_pop").hide()
		$(".admin_popup").show();
		$(".code_link").show();
		$(".mtgl_pop_con_box").mCustomScrollbar();
	})
	
	
	//获取代码链接的tab选项
	$(".mpc_tab li").on("click",function(){
		$(".mpc_tab li").removeClass("mpc_tab_active");
		$(this).addClass("mpc_tab_active");
		var mpcIndex = $(this).index();
//		console.log(mpcIndex)
		$(".mpc_tab_con li").hide();
		$(".mpc_tab_con li").eq(mpcIndex).show();
		$(".mCSB_container,.mCSB_dragger").css("top","0")
	})
	
	//获取代码链接的tab选项内容的单选
	$(".mpctc_radio_con label").on("click",function(){
		$(this).parents("li").find("label").removeClass("mrc_active")
		$(this).addClass("mrc_active");
	})
	
	//预览图弹窗
	$(".pdc_td3 img").on("click",function(){
		$(".mtgl_pop").hide()
		$(".admin_popup").show();
		$(".preview_pictures").show()
	})

	//编辑广告位弹窗
	$(".pdc_table .modify").on("click",function(){
		$(".mtgl_pop").hide()
		$(".admin_popup").show();
		$(".bj_newly_added").show();
		$(".bj_newly_added .mtgl_pop_con_box").mCustomScrollbar();
	})
	
	//批量广告弹窗
	$(".ggjypt_details .pdcb_obtain").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".import_adve").show();
	})
	
	//购买量弹窗显示
	$(".pci_drop_down .already_chosen em").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".ptpq_inf_buy").show();
	})
	
	//购买量弹窗的input显示
	$(".ctd_con_blue").on("click",function(){
		$(this).siblings(".ctd_con_box input[type=text]").show()
		$(this).hide();
	})
	$(".ctd_con_box input[type=text]").blur(function(){
		var val = $(this).val();
		$(this).hide();
		if( val !== "" ){
			$(this).siblings(".ctd_con_num").text(val);
			$(this).siblings(".ctd_con_num").show();
		}else{
			$(this).siblings(".ctd_con_blue").show();
		}
		
		
	})
	$(".ctd_con_num").on("click",function(){
		$(this).siblings(".ctd_con_box input[type=text]").show()
		$(this).hide();
	})
	
	//排期管理tab选项
	$(".pps_tab li").on("click",function(){
		$(".pps_tab li").removeClass("pps_tab_active")
		$(this).addClass("pps_tab_active")
		y = $(this).index();
		$(".ppc_table").hide();
		$(".ppc_table").eq(y).show();
	});
	
	//排期预览的input
	$(".pidc_edit a").on("click",function(){
		$(this).parents(".pidc_edit").siblings(".pidc_confirm").show();
		$(this).parents(".pidc_edit").hide();
		$(this).parents(".ptpq_inf_details_con").find(".psc_right_con .prtc_bz").each(function(){
			var hide = $(this).css("display");
			if (hide == "none") {
				$(this).siblings(".psc_right_tr input[type=text]").show();
				$(this).hide()
				$(this).siblings(".prtc_num").hide()
			}else if(hide !== "none"){
				$(this).siblings(".psc_right_tr input[type=text]").hide();
				$(this).show()
			}
		})
	})
	
	$(".prtc_num").each(function(){
		var text = $(this).text();
		$(this).siblings(".psc_right_tr input[type=text]").val(text)
	})
	
	$(".pidc_confirm a").on("click",function(){
		$(this).parents(".pidc_confirm").siblings(".pidc_edit").show();
		$(this).parents(".pidc_confirm").hide();
		$(".psc_right_tr input[type=text]").hide();
		$(this).parents(".ptpq_inf_details_con").find(".psc_right_tr input[type=text]").each(function(){
			var value = $(this).val();
			$(this).siblings(".prtc_num").show();
			$(this).siblings(".prtc_num").text(value);
			var hide = $(this).siblings(".prtc_bz").css("display");
			if (hide == "none") {
				$(this).siblings(".prtc_num").show()
			}else if(hide !== "none"){
				$(this).siblings(".prtc_num").hide()
			}
		})
	})
	
	//费用明细pidccd_td1的间距
	$(".pidccd_tr li,.material_auditing .multi_selection_tr ul").each(function(){
		var lineHeig = $(this).height()-1;
//		console.log(lineHeig)
		$(this).find(".pidccd_td1").css("line-height",lineHeig + "px")
		$(this).siblings(".material_auditing .multi_selection_td1").css({"line-height":lineHeig +"px","height":lineHeig + "px"})
	})
	
	//普通排期的编辑、确认按键提示的关闭
	$(".ptpq_inf_details_con h5 em").on("click",function(){
		$(this).parents("span").hide()
	})
	
	//草稿保存弹窗
	$(".bc_btn").on("click",function(){
		$(".admin_popup").show();
		$(".ap_con,.mtgl_pop").hide();
		$(".set_save").show();
	})
	
	//全部刷新弹窗
	$(".pps_whole_refurbish").on("click",function(){
		$(".admin_popup").show();
		$(".ap_con").hide();
		$(".whole_renovate").show()
	})
	
	//普通排期--价格设置弹窗
	$(".pidccd_td9 a").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".ptpq_price_setting").show();
		$(".scroll").mCustomScrollbar();
	})
	
	//radio单选的判断
	$(".ptpqic_con input[type=radio]").each(function(){
		var radioChec = $(this).prop("checked");
		var labelIndex = $(this).parent().index();
//		alert(labelIndex)
		if( radioChec == true ){
			$(this).parent().addClass("input_radio_active")
		}else{
			$(this).parent().removeClass("input_radio_active")
		}
	})
	$(".ptpqic_con_tit_radio label").on("click",function(){
		var labelIndex = $(this).index();
		switch (labelIndex){
			case 0:
				$(this).parents(".ptpqic_con").find(".pci_plan").show()
				$(this).parents(".ptpqic_con").find(".pci_media").hide()
				break;
			default:
				$(this).parents(".ptpqic_con").find(".pci_media").show()
				$(this).parents(".ptpqic_con").find(".pci_plan").hide()
				break;
		}
	})
	//价格设置周末同步价格
	$(".pps_weekend_price span").on("click",function(){
		var inputVal = $(this).siblings("input[type=text]").val();
		$(".weekend").each(function(){
			
			var blueDislay = $(this).find(".ctd_con_blue").css("display"),
				redDislay = $(this).find(".ctd_con_red").css("display"),
				grayDislay = $(this).find(".ctd_con_gray").css("display");
			if ( inputVal !== "" && blueDislay !== "none" && redDislay == "none" && grayDislay == "none" ) {
				$(this).find(".ctd_con_num").show();
				$(this).find(".ctd_con_num").text(inputVal);
				$(this).find(".ctd_con_blue").hide()
			}
		})
		
	})
	
	//费用比例input
	$(".picr_edit<.pidc_edit a").on("click",function(){
		$(this).parents(".pidc_edit").siblings(".pidc_confirm").show();
		$(this).parents(".pidc_edit").hide();
		$(this).parent().siblings(".pidc_scheme_con").find(".psc_right_tr input[type=text]").show();
		$(this).parent().siblings(".pidc_scheme_con").find(".prtc_num").hide()
	})
	
	$(".picr_edit<.pidc_confirm a").on("click",function(){
		$(this).parents(".pidc_confirm").siblings(".pidc_edit").show();
		$(this).parents(".pidc_confirm").hide();
		$(".psc_right_tr input[type=text]").hide();
		$(this).parent().siblings(".pidc_scheme_con").find(".psc_right_tr input[type=text]").each(function(){
			var value = $(this).val();
			$(this).siblings(".prtc_num").show();
			$(this).siblings(".prtc_num").text(value);
			$(this).siblings(".prtc_num").show()
		})
	})
	

	//实时竞价排期--时间点设置/定向人群点击
	$(".sic_time .sic_sele_btn").on("click",function(){
		$(".sic_time .sic_sele_btn").removeClass("sic_sele_active");
		$(this).addClass("sic_sele_active")
		var seleCon = $(this).find("p").text()
		$(this).siblings(".sic_sele_con").show()
		$(this).siblings(".sic_sele_con").find("span").text(seleCon)
	})
	$(".sic_crowd .sic_sele_btn").on("click",function(){
		$(".sic_crowd .sic_sele_btn").removeClass("sic_sele_active");
		$(this).addClass("sic_sele_active")
		var seleCon = $(this).find("p").text()
		$(this).siblings(".sic_sele_con").show()
		$(this).siblings(".sic_sele_con").find("span").text(seleCon)
	})
	
	
	//实时竞价媒体选择全选、多选、全不选的js
	$(".scmg_con label").on("click",function(){
		var scmgChec = $(this).find("input[type=checkbox]").prop("checked")
//		console.log(scmgChec)
		$(".scmg_con_size").mCustomScrollbar("destroy")
		if(scmgChec == true){
			$(".scmg_con_size_box").hide();
			$(this).parent().siblings(".scmg_con_size_box").show();
			$(this).find(".scmg_label").css("border-color","#3c74ee")
			$(this).find("span").css("background","url(../../ossweb-img/images/sprite.png) no-repeat -782px -288px")
			$(this).parent().siblings(".scmg_con_size_box").find(".scmg_con_size").mCustomScrollbar()
		}else if(scmgChec == false){
			$(this).parent().siblings(".scmg_con_size_box").hide();
			$(this).find(".scmg_label").css("border-color","#999999")
			$(this).find("span").css("background","none");
			$(this).parent().siblings(".scmg_con_size_box").find(".scmg_con_size input[type=checkbox]").prop("checked",false)
			$(this).parent().siblings(".scmg_con_size_box").find(".scmg_label").css("border-color","#999999")
			$(this).parent().siblings(".scmg_con_size_box").find(".scmg_con_size label span").css("background","none");
			$(this).siblings(".scmg_con_ico").css("color","#333333")
			$(this).siblings(".scmg_con_ico").find("span").css("background-position","-72px -58px");
		}
	})
	//实时竞价媒体选择广告位
	$(".scmg_con_ico").on("click",function(){
		var dislpay = $(this).parent().siblings(".scmg_con_size_box").css("display");
		$(this).parent().siblings(".scmg_con_size_box").hide();
		$(".scmg_con_ico").css("color","#333333")
		$(".scmg_con_ico span").css("background-position","-72px -58px");
		$(".sim_con_mtxz_ggw .sim_con_mtxz_ggw_case").css("box-shadow","none")
//		console.log(dislpay)
		$(".scmg_con_size").mCustomScrollbar("destroy")
		if(dislpay == "none"){
			$(".scmg_con_size_box").hide();
			$(this).parent().siblings(".scmg_con_size_box").show();
			$(this).parents(".sim_con_mtxz_ggw").find(".sim_con_mtxz_ggw_case").css("box-shadow","0 0 10px rgba(84,84,84,0.15)")
			$(this).css("color","#3771EF")
			$(this).find("span").css("background-position","-72px -72px")
			$(this).parent().siblings(".scmg_con_size_box").find(".scmg_con_size").mCustomScrollbar()
		}
	})
	
	$(".chec").on("click",function(){
		$(this).hide();
		$(".not_chec").show();
		$(".scmg_con_size input").prop("checked",true);
		$(".scmg_con_size .scmg_label").css("border-color","#3c74ee")
		$(".scmg_con_size .scmg_label").find("span").css("background","url(../../ossweb-img/images/sprite.png) no-repeat -782px -288px")
	});
	$(".not_chec").on("click",function(){
		$(this).hide();
		$(".chec").show();
		$(".scmg_con_size input").prop("checked",false);
		$(".scmg_con_size .scmg_label").css("border-color","#999999")
		$(".scmg_con_size .scmg_label").find("span").css("background","none")
	});
	$(".scmg_con_size input").on("click",function(){
		$(".chec").show();
		$(".not_chec").hide();
		var chec = $(this).prop("checked")
		if( chec == true){
			$(this).parents(".scmg_label").css("border-color","#3c74ee")
			$(this).siblings("span").css("background","url(../../ossweb-img/images/sprite.png) no-repeat -782px -288px")
		}else if(( chec == false)){
			$(this).parents(".scmg_label").css("border-color","#999999")
			$(this).siblings("span").css("background","none")
		}
		var chknum = $(this).parents(".scmg_con_size").find("input[type=checkbox]").size();//选项总个数
		var chk = 0;
		$(".scmg_con_size input").each(function () {  
	        if($(this).prop("checked")==true){
				chk++;
			}
	    });
	    if(chknum==chk){//全选
			$(".chec").hide();
			$(".not_chec").show();
		}else{//不全选
			$(".chec").show();
			$(".not_chec").hide();
		}
	});
	
	//实时竞价媒体选择--金融方案的单选
	$(".scj_td2 label").on("click",function(){
		var scjLabel = $(this).find("input[type=radio]").prop("checked")
		$(this).parents(".scj_td2").find("label").css("border-color","#CDCDCD");
		$(this).parents(".scj_td2").find("label span").css("background","none")
		if( scjLabel == true ){
			$(this).css("border-color","#3771EF");
			$(this).find("span").css("background","#3771EF")
		}else if( scjLabel == false ){
			$(this).css("border-color","#CDCDCD");
			$(this).find("span").css("background","none")
		}
	})
	$(".scj_td3 label").on("click",function(){
		var scjLabel = $(this).find("input[type=radio]").prop("checked")
		$(this).parents(".scj_td3").find("label").css("border-color","#CDCDCD");
		$(this).parents(".scj_td3").find("label span").css("background","none")
		if( scjLabel == true ){
			$(this).css("border-color","#3771EF");
			$(this).find("span").css("background","#3771EF")
		}else if( scjLabel == false ){
			$(this).css("border-color","#CDCDCD");
			$(this).find("span").css("background","none")
		}
	})
	
	//实时竞价排期管理
	$(".switch_shut").on("click",function(){
		var className = $(this).hasClass("switch_open")
		if (className == false ) {
			$(this).addClass("switch_open")
		} else{
			$(this).removeClass("switch_open")
		}
	})
	//实时竞价排期管理tab选项
	$(".pps_tab li").on("click",function(){
		$(".pps_tab li").removeClass("pps_tab_active")
		$(this).addClass("pps_tab_active")
		y = $(this).index();
		$(".spc_table").hide();
		$(".spc_table").eq(y).show();
	});
	
	//时间选择弹窗
	$(".sicsb_time,.scc_time").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".selection_time").show();
		$(".selection_time_con").mCustomScrollbar()
	})
	
	//时间选择-添加时间的窗口
	$(".stcwc_btn_add").on("click",function(){
		$(".stcwc_btn_add").show();
		$(".stcwc_btn_confirm").hide()
		$(".stcw_time").hide();
		$(this).parents(".stc_week_con").siblings(".stcw_time").show();
		$(this).siblings(".stcwc_btn_confirm").show();
		$(this).hide();
		$(".selection_time_btn").hide()
		$(this).parents(".stc_week").addClass("stc_week_active")
	})
	//时间选择-确认时间的窗口
	$(".stcwc_btn_confirm").on("click",function(){
		$(this).parents(".stc_week_con").siblings(".stcw_time").hide();
		$(this).siblings(".stcwc_btn_add").show();
		$(this).hide();
		$(".selection_time_btn").show()
		$(this).parents(".stc_week").removeClass("stc_week_active")
	})
	
	//时间选择-选择全天
	$(".selection_time .many_sele").on("click",function(){
		var sele = $(this).find("input[type=checkbox]").prop("checked");
		if( sele == true ){
			$(this).addClass("stad_active");
		}else{
			$(this).removeClass("stad_active")
		}
	})
	
	$(".stcw_time_all_day label").on("click",function(){
		var stcwChec = $(this).find("input[type=checkbox]").prop("checked")
		if( stcwChec == true ){
			$(this).parents(".stcw_time").find(".stcw_time_con li").removeClass("stcwtc_active");
		}
	})
	$(".stcw_time_con li").on("click",function(){
		var className = $(this).hasClass("stcwtc_active");
		var stcwChec = $(this).parents(".stcw_time").find(".stcw_time_all_day label input").prop("checked")
		if(className == false){
			$(this).addClass("stcwtc_active")
		}else{
			$(this).removeClass("stcwtc_active")
		}
		if( stcwChec == true ){
			$(this).parents(".stcw_time").find(".stcw_time_all_day label").removeClass("stad_active")
			$(this).parents(".stcw_time").find(".stcw_time_all_day label input").prop("checked",false)
		}
	})
	
	//定向人群弹窗
	$(".sicsb_crowd,.scxq_mobile_game .multi_selection_td7,.scxq_pc_game_scbj .tab_table_td4 a").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".orientation_crowd").show();
		$(".occ_label_con").addClass("scroll")
		$(".scroll").mCustomScrollbar();
	})
	//排期管理详情--定向人群弹窗
	$(".scc_crowd").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".spd_orientation_crowd").show()
		$(".spd_orientation_crowd .scroll").mCustomScrollbar();
	})
	
	//定向人群智能扩散按键确认弹窗
	$(".orientation_crowd .frame_btn").on("click",function(){
		$(".znks_pop").show();
		$(".orientation_crowd").hide()
	})
	$(".material_orientation_btn .znbqks_btn").on("click",function(){
		$(".admin_popup").show()
		$(".znks_pop").show();
		$(".orientation_crowd").hide()
	})
	$(".znks_pop a").on("click",function(){
		$(".znks_pop").hide();
		$(".admin_popup").hide()
	})
	
	//标签智选左边tab
	$(".occlzc_left_tab p").on("click",function(){
		$(".occlzc_left_tab p").removeClass("pps_tab_active")
		$(this).addClass("pps_tab_active");
		$(".occlzc_right_con").hide();
		var index = $(this).index();
		$(".occlzc_right_con").eq(index).show();

	})
	
	//标签智选右边tab	
	
	$(".orc_td p").on("click",function(){
		var index = $(this).parent().index();
		$(this).parents(".occlzc_right_con_tab").find(".orc_td p").removeClass("orc_td_active")
		$(this).addClass("orc_td_active")
		$(this).parents(".occlzc_right_con").find(".ortc_box").hide()
		$(this).parents(".occlzc_right_con").find(".ortc_box").eq(index).show();
		$(this).parents(".occlzc_right_con").find(".ortc_box .occlzc_right_tab_con").removeClass("scroll")
		$(this).parents(".occlzc_right_con").find(".ortc_box").eq(index).find(".occlzc_right_tab_con").addClass("scroll")
		$(this).parents(".occlzc_right_con").find(".occlzc_right_tab_con<.scroll").mCustomScrollbar("destroy");
		$(this).parents(".occlzc_right_con").find(".occlzc_right_tab_con<.scroll").mCustomScrollbar()
	})
	
	//标签智选多选

	$(".occlzc_right_tab_con .many_sele input").on("click",function(){
		var text = $(this).parents(".many_sele").siblings("p").text();
		var sele = $(this).prop("checked");
		var index = $(this).parents(".ortc_label_box").index();
		$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").css("z-index","0")
		if( sele == true ){
			$(this).parents(".many_sele").addClass("input_checkbox_active");
			$(this).parents(".ortc_box").find(".ortc_subset .not_label").hide();
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).show();
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).css("z-index","10")
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).find(".ortc_subset_con_tit").text(text)
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).find("ul").addClass("scroll")
			$(this).parents(".occlzc_right_tab_con").siblings(".ortc_subset").find(".scroll").mCustomScrollbar();
		}else if( sele == false ){
			$(this).parents(".many_sele").removeClass("input_checkbox_active");
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).hide()
			$(this).parent().siblings(".ortc_label_con_box").hide();
			$(this).parents(".occlzc_right_tab_con").siblings(".ortc_subset").find(".scroll").mCustomScrollbar("destroy");
		}
		var chkFalse = 0,
			chknum = $(this).parents(".occlzc_right_tab_con").find("input[type=checkbox]").size();
		$(this).parents(".occlzc_right_tab_con").find("input[type=checkbox]").each(function () {  
	        if( $(this).prop("checked") == false ){
				chkFalse ++;
			}
	    });
	    if( chknum == chkFalse ){
			$(this).parents(".ortc_box").find(".ortc_subset .not_label").show();
		}
	})
	$(".occlzc_right_tab_con p").on("click",function(){
		$(this).parents(".ortc_subset_con").hide();
		var text = $(this).text();
		var sele = $(this).siblings(".many_sele").find("input[type=checkbox]").prop("checked");
		$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").css("z-index","0")
		if( sele == true ){
			var index = $(this).parent().index();
//			console.log(index)
			$(this).parents(".ortc_box").find(".ortc_subset").show();
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).show();
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).find(".ortc_subset_con_tit").text(text)
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).css("z-index","10")
			$(this).parents(".ortc_box").find(".ortc_subset .ortc_subset_con").eq(index).find("ul").addClass("scroll")
			$(this).parents(".occlzc_right_tab_con").siblings(".ortc_subset").find(".scroll").mCustomScrollbar("destroy");
			$(this).parents(".occlzc_right_tab_con").siblings(".ortc_subset").find(".scroll").mCustomScrollbar();
		}else{
			$(this).parent().siblings(".ortc_label_con_box").hide();
		}
	})
	
	//智能素材--素材详情（端游）提示标签关闭
	$(".spgc_prompt em").on("click",function(){
		$(".spgc_prompt").hide()
	})
	
	//弹窗的有下划线tab组件
	$(".popup_tab li").on("click",function(){
		$(".popup_tab li").removeClass("popup_tab_active")
		$(this).addClass("popup_tab_active")
		y = $(this).index();
		$(".popup_tab_con").hide();
		$(".popup_tab_con").eq(y).show();
		
		$("input[type=file]").change(function(){
		    var str=$(this).val();
		    console.log(str)
		    if(str!==""){
		        var arr=str.split("\\");
		        var file_name=arr[arr.length-1];
		        $(".popup_tab_con").eq(y).find(".file_con_text").text(file_name);
				$(".popup_tab_con").eq(y).find(".file_con_text").css("color","#333333");
		    }
		});
	})
	
	//素材编辑弹窗单选
	$(".input_radio_con label").on("click",function(){
		var check = $(this).find("input[type=radio]").prop("checked");
		$(this).parents(".input_radio_con").find("label").removeClass("input_radio_active")
		if( check == true ){
			$(this).addClass("input_radio_active")
		}
	})
	
	//素材审核multi_selection_td1间距
	function spacing(){
		$(".znsc .multi_selection_tr ul").each(function(){
			var lineHeig = $(this).height();
			$(this).siblings(".znsc .multi_selection_td1").css({"line-height":lineHeig +"px","height":lineHeig + "px"})
		})
	}
	spacing();
	$(".tab_label li").click(function(){
		spacing();
	})
	
	
	//素材详情（手游）勾选ID批量上传和删除按键
	$(".scxq_mobile_game .multi_selection_head label").on("click",function(){
		var maChec = $(this).find("input[type=checkbox]").prop("checked");
		if( maChec == true ){
			$(".scxq_mobile_game .multi_selection_tr input[type=checkbox]").prop("checked",true);
			$(".scxq_mobile_game label").addClass("input_checkbox_active");
			$(".scxq_mobile_game .batch_btn").show();
		}else if( maChec == false ){
			$(".scxq_mobile_game .multi_selection_tr input[type=checkbox]").prop("checked",false);
			$(".scxq_mobile_game label").removeClass("input_checkbox_active");
			$(".scxq_mobile_game .batch_btn").hide();
		}
	})
	$(".scxq_mobile_game .multi_selection_tr label").on("click",function(){
		$(".scxq_mobile_game .batch_btn").show();
		var chec = $(this).find("input[type=checkbox]").prop("checked")
		if( chec == true){
			$(this).addClass("input_checkbox_active");
		}else if(( chec == false)){
			$(this).removeClass("input_checkbox_active");
		}
		var chknum = $(".scxq_mobile_game .multi_selection_tr input").size();//选项总个数
		var chk = 0,
			chkFalse = 0;
		$(".scxq_mobile_game .multi_selection_tr input").each(function () {  
	        if( $(this).prop("checked") == true ){
				chk++;
			}else if( $(this).prop("checked") == false ){
				chkFalse ++;
			}
	    });
	    if( chknum==chk ){//全选
			$(".scxq_mobile_game .multi_selection_head label input[type=checkbox]").prop("checked",true);
			$(".scxq_mobile_game .multi_selection_head label").addClass("input_checkbox_active");
		}else if( chknum == chkFalse ){
			$(".batch_btn").hide();
		}else{//不全选
			$(".scxq_mobile_game .multi_selection_head label input[type=checkbox]").prop("checked",false);
			$(".scxq_mobile_game .multi_selection_head label").removeClass("input_checkbox_active");
		}
	});
	
	//素材边框样式
	$(".znsc .tab_table").each(function(){
		$(this).find(".multi_selection_tr").eq(0).find(".multi_selection_td1").addClass("border")
		$(this).find(".multi_selection_tr").eq(0).find("ul li").each(function(){
			if($(this).index() == 0){
				$(this).find("div").addClass("border")
			}
		})
	})
		
	
	//上传素材、素材定向的滚动条插件
	$(".uploading_material .scroll,.material_orientation_con .scroll").mCustomScrollbar();
	

	//素材详情（端游）编辑弹窗
	$(".scxq_pc_game_scbj .modify").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".material_edit").show()
	})
	
	//素材详情（手游）编辑弹窗
	$(".scxq_mobile_game .modify").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".mobile_game").show()
	})
	
	//素材详情（手游）批量上传弹窗
	$(".scxq_mobile_game .gradual_change_btn,.pc_games_con .gradual_change_btn,.mobile_games_con .gradual_change_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".set_money_wrong").show();
	})
	
	//素材审核勾选ID批量通过和删除按键
	$(".material_auditing .multi_selection_head label").on("click",function(){
		var maChec = $(this).find("input[type=checkbox]").prop("checked");
		if( maChec == true ){
			$(this).parents(".multi_selection_head").siblings(".multi_selection_tr").find(" ul input[type=checkbox]").prop("checked",true);
			$(this).parents(".tab_table").find("label").addClass("input_checkbox_active");
			$(this).parents(".multi_selection_head").siblings(".batch_btn").show();
		}else if( maChec == false ){
			$(this).parents(".multi_selection_head").siblings(".multi_selection_tr").find(" ul input[type=checkbox]").prop("checked",false);
			$(this).parents(".tab_table").find("label").removeClass("input_checkbox_active");
			$(this).parents(".multi_selection_head").siblings(".batch_btn").hide();
		}
	})
	$(".material_auditing .multi_selection_tr label").on("click",function(){
		$(this).parents(".multi_selection_tr").siblings(".batch_btn").show();
		var chec = $(this).find("input[type=checkbox]").prop("checked")
		if( chec == true){
			$(this).addClass("input_checkbox_active");
		}else if(( chec == false)){
			$(this).removeClass("input_checkbox_active");
		}
		var chknum = $(this).parents(".multi_selection_tr").find("input").size();//选项总个数
		var chk = 0,
			chkFalse = 0;
		$(this).parents(".multi_selection_tr").find("input").each(function () {  
	        if( $(this).prop("checked") == true ){
				chk++;
			}else if( $(this).prop("checked") == false ){
				chkFalse ++;
			}
	    });
	    if( chknum==chk ){//全选
			$(this).parents(".multi_selection_tr").siblings(".multi_selection_head").find(" label input[type=checkbox]").prop("checked",true);
			$(this).parents(".multi_selection_tr").siblings(".multi_selection_head").find(" label").addClass("input_checkbox_active");
		}else if( chknum == chkFalse ){
			$(this).parents(".multi_selection_tr").siblings(".batch_btn").hide();
		}else{//不全选
			$(this).parents(".multi_selection_tr").siblings(".multi_selection_head").find(" label input[type=checkbox]").prop("checked",false);
			$(this).parents(".multi_selection_tr").siblings(".multi_selection_head").find(" label").removeClass("input_checkbox_active");
		}
	});
	
	//上传素材审核勾选ID
	$(".uploading_material .multi_selection_head label").on("click",function(){
		var maChec = $(this).find("input[type=checkbox]").prop("checked");
		if( maChec == true ){
			$(this).parents(".tab_table").find(".multi_selection_tr input[type=checkbox]").prop("checked",true);
			$(this).parents(".tab_table").find("label").addClass("input_checkbox_active");
		}else if( maChec == false ){
			$(this).parents(".tab_table").find(".multi_selection_tr input[type=checkbox]").prop("checked",false);
			$(this).parents(".tab_table").find("label").removeClass("input_checkbox_active");
		}
	})
	$(".uploading_material .multi_selection_tr label").on("click",function(){
		var chec = $(this).find("input[type=checkbox]").prop("checked")
		if( chec == true){
			$(this).addClass("input_checkbox_active");
		}else if(( chec == false)){
			$(this).removeClass("input_checkbox_active");
		}
		var chknum = $(this).parents(".tab_table").find(".multi_selection_tr").find("input").size();//选项总个数
		var chk = 0,
			chkFalse = 0;
		$(this).parents(".tab_table").find(".multi_selection_tr").find("input").each(function () {
	        if( $(this).prop("checked") == true ){
				chk++;
			}else if( $(this).prop("checked") == false ){
				chkFalse ++;
			}
	    });
	    if( chknum==chk ){//全选
			$(this).parents(".tab_table").find(".multi_selection_head label input[type=checkbox]").prop("checked",true);
			$(this).parents(".tab_table").find(".multi_selection_head label").addClass("input_checkbox_active");
		}else{//不全选
			$(this).parents(".tab_table").find(".multi_selection_head label input[type=checkbox]").prop("checked",false);
			$(this).parents(".tab_table").find(".multi_selection_head label").removeClass("input_checkbox_active");
		}
	});
	
	//系统管理--新建用户
	$(".new_user").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".new_user_pop").show()
	})
	
	//系统管理--编辑用户
	$(".user_settings .modify").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".edit_user_pop").show()
	})
	
	//系统管理--新建游戏
	$(".game_management .mpc_newly_build_left").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".new_built_game").show()
	})
	
	//系统管理--编辑游戏
	$(".game_management .modify").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".edit_game").show()
	})
	
	//系统管理--游戏管理--ID全选
	$(".game_management .tab_head label").on("click",function(){
		var maChec = $(this).find("input[type=checkbox]").prop("checked");
		if( maChec == true ){
			$(".game_management label input[type=checkbox]").prop("checked",true);
			$(".game_management label").addClass("input_checkbox_active");
			$(".game_management_btn").show();
		}else if( maChec == false ){
			$(".game_management label input[type=checkbox]").prop("checked",false);
			$(".game_management label").removeClass("input_checkbox_active");
			$(".game_management_btn").hide();
		}
		sltHeight();
	})
	$(".game_management .tab_table_tr label").on("click",function(){
		$(".game_management_btn").show();
		var chec = $(this).find("input[type=checkbox]").prop("checked")
		if( chec == true){
			$(this).addClass("input_checkbox_active");
		}else if(( chec == false)){
			$(this).removeClass("input_checkbox_active");
		}
		var chknum = $(".game_management .tab_table_tr input").size();//选项总个数
		var chk = 0,
			chkFalse = 0;
		$(".game_management .tab_table_tr input").each(function () {  
	        if( $(this).prop("checked") == true ){
				chk++;
			}else if( $(this).prop("checked") == false ){
				chkFalse ++;
			}
	    });
	    if( chknum==chk ){//全选
			$(".game_management .tab_head label input[type=checkbox]").prop("checked",true);
			$(".game_management .tab_head label").addClass("input_checkbox_active");
		}else if( chknum == chkFalse ){
			$(".game_management_btn").hide();
		}else{//不全选
			$(".game_management .tab_head input[type=checkbox]").prop("checked",false);
			$(".game_management .tab_head label").removeClass("input_checkbox_active");
		}
		sltHeight();
	});
	
	//游戏管理--批量删除提示
	$(".game_management_btn a,.scxq_mobile_game .frame_btn,.pc_games_con .frame_btn,.mobile_games_con .frame_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".set_percent_wrong").show();
	})
	
	//精准投放设置编辑按钮
	$(".jztf_con_top .edit_btn").on("click",function(){
		$(".jztf_con_right_num p").each(function(){
			var text = $(this).text();
			$(this).siblings("input[type=text]").val(text)
		}) 
		$(".jztf_con_right_num input[type=text]").show();
		$(".jztf_con_right_num p").hide();
		$(this).hide();
		$(this).siblings(".confirm_edit_btn").show();
	})
	//精准投放设置确认按钮
	$(".jztf_con_top .confirm_edit_btn").on("click",function(){
		$(".jztf_con input[type=text]").each(function(){
			var val = $(this).val();
			if( val !== "" ){
				$(this).siblings("p").text(val)
			}
		})
		
		$(".jztf_con_right_num input[type=text]").hide();
		$(".jztf_con_right_num p").show();
		$(this).hide();
		$(this).siblings(".edit_btn").show();
	})
	
	//5.29修改智能排期
	//高级设置展开收起
	
	$(".isccrc_advanced_setting .oatu_take_up").on("click",function(){
		var iasPd = $(".isccrc_advanced_setting").hasClass("ias_padding");
		if( iasPd == true ){
			$(".isccrc_advanced_setting").removeClass("ias_padding")
		}else if( iasPd == false ){
			$(".isccrc_advanced_setting").addClass("ias_padding")
		}
		$(".isccrc_advanced_setting .isccrc_ul").hide();
		$(this).hide();
		$(this).siblings("p").show();
		
	})
	$(".isccrc_advanced_setting .oatu_open").on("click",function(){
		var iasPd = $(".isccrc_advanced_setting").hasClass("ias_padding");
		if( iasPd == true ){
			$(".isccrc_advanced_setting").removeClass("ias_padding")
		}else if( iasPd == false ){
			$(".isccrc_advanced_setting").addClass("ias_padding")
		}
		$(".isccrc_advanced_setting .isccrc_ul").show();
		$(this).hide();
		$(this).siblings("p").show();
	})
	
	//智能排期详情--新增媒体
	$(".si_throw_in .newly_added_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".new_media_inf").show();
		$(".new_media_inf .scroll").mCustomScrollbar();
	})
	
	//智能排期--修改排期信息
	$(".si_inf1 a").on("click",function(){
		$(".admin_popup").show();
		$(".ap_con,.mtgl_pop").hide();
		$(".modify_inf").show();
	})
	
	//普通排期导入方案
	$(".file_scheme_btn").on("click",function(){
		$(this).siblings("input[type=file]").click()
	})
	
	//弹出导入方案弹窗
	$(".again_import").on("click",function(){
		$(".admin_popup").show();
		$(".ap_con,.mtgl_pop").hide();
		if ( $(this).hasClass("scheduling_btn") == true ) {
			$(".import_scheduling").show();
		}else if( $(this).hasClass("finance_btn") == true ){
			$(".import_finance").show();
		}
	})
	
	//媒体管理展开或收起
	$(".open_and_take_up").on("click",function(){
		if( $(this).find(".oatu_open").is(":visible") == true ){
			$(".mpc_classify_menu").show();
			$(this).find(".oatu_open").hide();
			$(this).find(".oatu_take_up").show();
		}else if( $(this).find(".oatu_open").is(":visible") == false ){
			$(".mpc_classify_menu").hide();
			$(this).find(".oatu_open").show();
			$(this).find(".oatu_take_up").hide();
		}
	})
	$(".channel_number_top .newly_added_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".newly_added_channel").show();
		$(".newly_added_channel .scroll").mCustomScrollbar();
	})
	$(".newly_added_channel .already_chosen span").on("click",function(){
		var size = $(".newly_added_channel .already_chosen p").size();
//		$(this).parents("p").remove()
		//滚动条初始化
		$(".newly_added_channel .scroll").mCustomScrollbar("destroy");
		if (size >= 4) {
			//添加滚动条
			$(".newly_added_channel .scroll").mCustomScrollbar();
		}
	})
	
	//智能素材--批量删除素材弹窗
	$(".material_management .delete").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop").hide();
		$(".batch_delete").show();
		$(".batch_delete .scroll").mCustomScrollbar();
	})
	
	//智能素材--批量删除素材全选
	$(".batch_delete .chec").on("click",function(){
		$(this).hide();
		$(".not_chec").show();
		$(".batch_delete .popup_table_td1 input[type=checkbox]").prop("checked",true);
		$(".batch_delete .input_checkbox").addClass("input_checkbox_active")
	});
	$(".batch_delete .not_chec").on("click",function(){
		$(this).hide();
		$(".chec").show();
		$(".batch_delete .popup_table_td1 input[type=checkbox]").prop("checked",false);
		$(".batch_delete .input_checkbox").removeClass("input_checkbox_active")
	});
	$(".batch_delete .input_checkbox").on("click",function(){
		$(".chec").show();
		$(".not_chec").hide();
		var chec = $(this).find("input").prop("checked")
		if( chec == true){
			$(this).addClass("input_checkbox_active");
		}else if(( chec == false)){
			$(this).removeClass("input_checkbox_active");
		}
		var chknum = $(".batch_delete input").size();//选项总个数
		var chk = 0;
		$(".batch_delete input").each(function () {  
	        if($(this).prop("checked")==true){
				chk++;
			}
	    });
	    if(chknum==chk){//全选
			$(".chec").hide();
			$(".not_chec").show();
		}else{//不全选
			$(".chec").show();
			$(".not_chec").hide();
		}
	});
	
	//上传素材--定向人群弹窗
	$(".soc_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".orientation_crowd").show();
	})
	
	//实时竞价排期--费用分配编辑
	$(".scca_tit_btn .edit_btn").on("click",function(){
		$(".sim_con_cost_allocation .lsr_tr p").each(function(){
			var text = $(this).text();
			$(this).siblings("input[type=text]").val(text)
		}) 
		$(".sim_con_cost_allocation .lsr_tr").find("p").hide();
		$(".sim_con_cost_allocation .lsr_tr").find("input[type=text]").show();
		$(this).hide();
		$(this).siblings(".confirm_edit_btn").show();
	})
	$(".scca_tit_btn .confirm_edit_btn").on("click",function(){
		$(".sim_con_cost_allocation .lsr_tr input[type=text]").each(function(){
			var val = $(this).val();
			if( val !== "" ){
				$(this).siblings("p").text(val)
			}
		})
		$(".sim_con_cost_allocation .lsr_tr input[type=text]").hide();
		$(".sim_con_cost_allocation .lsr_tr p").show();
		$(this).hide();
		$(this).siblings(".edit_btn").show();
	})
	
	//激活弹窗
	$(".activation_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".activation_pop").show();
	})
	
	//撤回弹窗
	$(".reject_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".reject_pop").show();
	})
	
	//驳回弹窗
	$(".withdraw_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".withdraw_pop").show();
	})
	
	//上传素材
	$(".uploading_material .tab_label li").on("click",function(){
		var index = $(this).index();
		$(".uploading_material .tab_table .scroll").mCustomScrollbar("destroy");
		$(".uploading_material .tab_table").eq(index).find(".scroll").mCustomScrollbar();
	})
	
	//智能排期投放上限
	$(".tfsx").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".launch_upper_limit").show();
	})
	
	//智能排期cpa配置
	$(".cpa_configure_btn").on("click",function(){
		$(".admin_popup").show();
		$(".mtgl_pop,.ap_con").hide();
		$(".cpa_configure").show();
		$(".scroll").mCustomScrollbar();
	})
	
})
