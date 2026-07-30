---
layout: page
title: Research
permalink: /research/
description: Machine learning for single-cell analysis and translational research.
nav: false
nav_order: 3
---

<div data-lang="en" markdown="1">

I develop machine learning methods that connect patient-level clinical labels with signals measured in cells and molecules. My work models cells nested within patients, signals distributed across cell-cell interactions or genomic loci, and pretrained single-cell representations that need to be adapted to specific analysis tasks.

## From cell-level signals to patient-level predictions

Clinical labels are usually assigned to patients or samples, even when the signal that separates disease groups is limited to a subset of cells or interactions. In the COVID-19 study, **CCI-GSVA** converted cell-cell interaction activity into one score per sample and clustered patients by those scores. This allowed cell-cell communication to be compared across patients rather than only between cell types.

**scMILD** addresses the same problem with weak supervision. It treats each patient sample as a bag of cells, learns from patient-level labels, and identifies the cell subpopulations associated with classification. The model reports both the sample prediction and the cells and markers that contributed to it.

## Regulatory signals

**scTELL** identifies locus-specific transposable element accessibility in single-cell ATAC-seq data. It supports the analysis of repetitive regulatory loci whose accessibility differs across conditions or cell states. While scMILD identifies disease-associated cells, scTELL examines the regulatory loci linked to those cellular states.

## Translational molecular profiling

In collaborative translational studies, I analyze clinical cohorts using proteomic, genomic, and methylation data. This work includes kidney disease proteomics, breast cancer genomics, and pan-cancer multi-omics.

These studies keep my method development tied to clinical questions. I am interested in models that distinguish patient groups and show which cells, genes, or molecular measurements account for the distinction.

## Foundation models

**scDSTL** adapts single-cell foundation-model representations to specific downstream tasks. My current work also covers cross-disease modeling and regulatory network inference, with an emphasis on results that can be checked against clinical or biological evidence.

</div>

<div data-lang="ko" lang="ko" markdown="1">

제 연구는 환자 수준의 임상 라벨과 세포·분자 수준의 신호를 연결하는 머신러닝 방법을 다룹니다. 환자 안에 여러 세포가 있고, 질환 관련 신호가 일부 세포, 세포 간 상호작용, 유전체 위치에 흩어져 있다는 점을 모델링합니다. 또한 사전학습된 단일세포 표현을 개별 분석 과제에 맞게 조정하는 방법을 연구합니다.

## 세포 신호를 환자 수준 분석으로 연결하기

임상 라벨은 보통 환자나 샘플에 부여되지만, 질환군을 구분하는 신호는 일부 세포나 상호작용에만 존재할 수 있습니다. COVID-19 연구에서 **CCI-GSVA**는 세포 간 상호작용 활성을 샘플별 점수로 변환하고, 이 점수를 기준으로 환자를 군집화했습니다. 이를 통해 세포 유형 간 상호작용을 환자 간에 비교할 수 있었습니다.

**scMILD**는 같은 문제를 약지도학습으로 다룹니다. 각 환자 샘플을 세포들의 bag으로 보고 환자 수준 라벨에서 학습하며, 분류와 연관된 세포 하위집단을 식별합니다. 샘플 예측값뿐 아니라 예측에 기여한 세포와 마커도 함께 제시합니다.

## 조절 신호

**scTELL**은 single-cell ATAC-seq 데이터에서 locus-specific transposable element 접근성을 식별합니다. 이를 통해 조건이나 세포 상태에 따라 접근성이 달라지는 반복서열 기반 조절 위치를 분석할 수 있습니다. scMILD가 질환과 연관된 세포를 찾는다면, scTELL은 해당 세포 상태와 연결된 조절 위치를 다룹니다.

## 중개의학 분자 프로파일링

중개의학 공동연구에서는 임상 코호트의 단백체, 유전체, 메틸화 데이터를 분석해 왔습니다. 주요 주제는 원발성 사구체질환의 단백체, 유방암 유전체, 암종 간 비교를 위한 범암 멀티오믹스 분석입니다.

이 경험은 방법론 개발을 실제 임상 질문과 연결해 줍니다. 저는 환자군을 구분하는 데 그치지 않고, 어떤 세포, 유전자, 분자 지표가 그 차이를 만드는지 보여주는 모델에 관심이 있습니다.

## 파운데이션 모델

**scDSTL**은 단일세포 파운데이션 모델의 표현을 개별 분석 과제에 맞게 조정합니다. 현재는 질환 간 모델링과 조절 네트워크 추론도 함께 연구하며, 임상 및 생물학적 근거로 확인할 수 있는 결과를 만드는 데 초점을 두고 있습니다.

</div>
